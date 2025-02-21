const mongoose = require('mongoose'); 

const ExpenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    }, 
    text: {
        type: String,
    }
})


const Expense = mongoose.model("Expense", ExpenseSchema); 
module.exports = {Expense, ExpenseSchema}; 