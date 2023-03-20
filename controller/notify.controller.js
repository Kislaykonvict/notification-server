const Notify = require('../model/notify.model')

exports.acceptNotificationRequest = async (req, res) => {
    const notifyObj = {
        subject : req.body.subject,
        _id : req.body.id,
        content : req.body.content,
        recipientEmails : req.body.recipientEmails,
        requester : req.body.requester
    }

    try {
        const notification = await Notify.create(notifyObj);
        res.status(200).send({
            requestId : notification._id,
            status : "Accepted Request !"
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message : `Error occured while processing your request. Please try again after sometime !`
        })
    }
}

exports.getNotificationRequest = async (req, res) => {
    try {
        const notification = await Notify.findOne({_id : req.params.id});
        if(!notification) {
            return res.status(404).send({
                message : `Notifation doesn't exist !`
            })
        }
        res.status(200).send({
            requestId : notification._id,
            subject : notification.subject,
            content : notification.content,
            recipientEmails : notification.recipientEmails,
            sentStatus : notification.sentStatus
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message : `Error occured while processing your request. Please try again after sometime !`
        });
    }
}