const mongoose = require('mongoose'); 
const { ExpenseSchema }  = require('./Expense.js'); 



const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
        minLength: 4,
    }, 
    otp: {
        type: Number,
        max: 10000,
        min: 999
    },
    balance: Number,

    expenses: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Expense",
        }
    ]
})

// const User = mongoose.model("User", UserSchema); 
const User = mongoose.model("User", UserSchema); 

module.exports = { UserSchema, User };