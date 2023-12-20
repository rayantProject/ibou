import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    hashpass: {
        type: String,
        required: true,
    },
});

export default model('User', userSchema);

// ##########################################################################################################################################################
