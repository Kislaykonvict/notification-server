const cron = require('node-cron');
const NotifyModel = require('../model/notify.model');
const EmailTransporter = require('../notifier/emailService')

cron.schedule('*/10 * * * * *', async () => {
    const notifications = await NotifyModel.find({sentStatus : 'UN_SENT'});
    console.log(notifications.length);

    notifications.forEach(notification => {
        const mailData = {
            from : "Notification-service@gmail.com",
            to : notification.recipientEmails,
            subject : notification.subject,
            text : notification.content
        };
        console.log(mailData);
        EmailTransporter.sendMail(mailData, async (err, info) => {
            if(err){
                console.log("this error " + err.message);
            }
            else{
                console.log(info);
                //update in DB
                await NotifyModel.updateOne({ _id : notification._id}, {sentStatus : "SENT"});
            }
        })
    })
});