const mongoose = require('mongoose');

const notifySchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    _id : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    recipientEmails : {
        type : [String],
        required : true
    },
    requester : {
        type : String
    },
    sentStatus : {
        type : String,
        default : "UN_SENT"
    }     
},
    {timestamps : true}
)


module.exports = mongoose.model('Notification', notifySchema);
