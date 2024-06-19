const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
require("dotenv").config(); 
mongoose.set("strictQuery", true);
const port = process.env.SERVER_PORT;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

const userRoute= require('./route/userRoute')
const adminRoute= require('./route/adminRoute')
const courseRoute= require('./route/courseRoute')


mongoose.connect(process.env.DB_URL).then(()=>{

app.listen(process.env.PORT,

    ()=>console.log("working",process.env.PORT)
)
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ data: "it works... it works.... " });
  });
app.use('/api',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/course',courseRoute);

console.log(process.env.SECRET_KEY);