const config = require('./config');
const mongoouse = require('mongoose');
const connectDB = () => {
    async function connectDB() {
        try {
            await mongoouse.connect(config(), {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        } catch (e) {
            console.log(e)
        }
    }

    connectDB().then(() => {console.log('DB activated')})
};

module.exports = connectDB;
