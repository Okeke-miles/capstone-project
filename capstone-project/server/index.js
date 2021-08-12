const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const secret = 'mysecretsshhh';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//routes
const videoRoutes = require('./routes/videos');
const userRoutes = require('./routes/users');

// myFirstDatabase
mongoose.connect('mongodb+srv://first-user:ZXdPM39g9zggb9z@capstone-project.qscb3.mongodb.net/videos?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, }).catch(console.error);
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//env variables 
require("dotenv").config();
const port = process.env.PORT || 7080

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());
app.use(cookieParser());


//endoints 
app.use('/api', videoRoutes);
app.use('/api', userRoutes);

//listening on port 7080
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});