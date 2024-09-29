require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const testRoutes = require('./routes/tests');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    // res.header('Access-Control-Allow-Origin', '*');
    next();
});

// routes
app.use('/api/tests',testRoutes)

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('Connected to the database : Check');
        // Listen on port only when connected to Database
        app.listen(PORT, () => {
            console.log(`Server running on port : ${PORT}`)
        });
    })
    .catch((err) => {
        console.log(err);
    });

const PORT = process.env.PORT || 4000;


