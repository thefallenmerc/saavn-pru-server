const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    email: String,
    name: String,
    picture: {
        required: false,
        type: String,
    }
}, {
    timestamps: true,
    toObject: {
        transform: (obj, ret) => {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
            return ret;
        }
    }
});

const User = mongoose.model("User", Schema);

module.exports = User;