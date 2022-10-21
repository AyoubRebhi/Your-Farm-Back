//import section
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const compression = require("compression");
const helmet = require("helmet");

//DB connection
mongoose.connect("mongodb://localhost:27017/your-farm");
mongoose.connection.on("connected", ()=>{
    console.log("DB connected");
})
mongoose.connection.on("error", (err)=>{
    console.log("mongodb failed with :", err);
});

//import routers
const routerAuth = require("./routers/auth.routers");

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json({limit: '50mb'}));


//routes middlewares
app.use("/auth", routerAuth);

//server listening
const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});