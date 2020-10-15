const mongoose = require('mongoose');

const database = () => {
    mongoose.connect(process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => {
            throw error;
        })
}

module.exports = database;