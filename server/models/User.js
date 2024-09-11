const mongoose = require('mongoose');
const keys = require('../config/keys');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);

 
