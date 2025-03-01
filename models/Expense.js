const mongoose = require('mongoose'); 

const ExpenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    }, 
    text: {
        type: String, // like groceries , tv, etc like where do u spend this amount
    }
})


const Expense = mongoose.model("Expense", ExpenseSchema); 
module.exports = {Expense, ExpenseSchema}; 