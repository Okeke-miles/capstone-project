const express = require("express");
const cors = require("cors");
const app = express();

//routes
const videoRoutes = require('./routes/videos');
const collageRoutes = require("./routes/collage")

//env variables 
require("dotenv").config();
const port = process.env.PORT || 7080

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());


//endoints 
app.use('/api', videoRoutes);
app.use('/api', collageRoutes);

//listening on port 7080
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});