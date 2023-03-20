require('./cronjob/cron');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const config = require('./config/serverConfig');
const dbConfig = require('./config/dbConfig')
const notifyRouter = require('./routes/notify.routes')
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(dbConfig.DB_URL, { family : 4}, (err) => {
    if(err) {
        console.log('Error occured !')
    }
    else {
        console.log('Connected to DB');
        app.listen(config.PORT, config.HOST, () => {
            console.log(`Server is listening on ${config.HOST} : ${config.PORT}`)
        })
    }
})

app.use(notifyRouter)   

app.get('/', (req, res) => {
    res.send(`Welcome to the CRM application !`);
})         