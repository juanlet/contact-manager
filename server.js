const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req,res,next)=>{
    res.json({ msg: 'Welcome to the contact'});
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});