require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/User.js');
const { Expense } = require('./models/Expense.js');
const cors = require('cors');
const path = require('path');

mongoose.connect(process.env.MONGO_URL).then(e=>{
  console.log("Backend Connected Successfully");
})

const app = express();
app.use(cors({
  origin: true, // Adjust as needed for your setup
}));  
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password }); 
    try {
        await user.save(); 
        res.status(201).json({msg: "Registration successful"})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    
    const account = await User.findOne({
      email : email
    })
    if (!account) return res.status(404).json({success: false, msg: "Account does not exist"})

    const match = account.password == password; 
    if (!match) return res.status(400).json({success: false, msg: "Invalid password"}); 

    res.status  (200).json({success: true, userID: account._id})
})

app.post('/expenses', async (req, res) => {
    const { amount, text, userID } = req.body;
    const user = await User.findById(userID); 
    if (!user) return res.status(404).json({msg: "Not logged in"});
    
    try {
        const expense = await Expense.create({ amount, text }); 
        user.expenses.push(expense); 
        await user.save();

        res.send({ msg: "Expense created successfully", expense}); 

    } catch(err) {
        res.status(400).send({ error: err.message })
    }

})

app.delete('/expenses/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        await Expense.findByIdAndDelete(id); 
        res.send({msg: "Deleted successfully"}); 
    } catch(err) {
        res.status(400).json({error: err.message}); 
    }
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id; 
    const user = await User.findById(id).populate('expenses');; 
    if (!user) return res.status(404).json({err: "User not found"}); 

    res.send({ user }); 

})

const __dirname1 = path.resolve(); // Use a single __dirname variable

console.log(process.env.NODE_ENV === "production"); 
if (process.env.NODE_ENV === "production") {
  // Serve static files from the build folder during production
  const frontendBuild = path.join(__dirname1, "Frontend-SilverSavings/build");
  console.log(frontendBuild); 
  
  app.use(express.static(frontendBuild));

  // Handle all unmatched routes (serves index.html)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "Frontend-SilverSavings", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });
}

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
