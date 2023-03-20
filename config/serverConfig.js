if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    HOST : process.env.HOST,
    PORT : process.env.PORT
}