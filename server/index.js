const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const productRouter = require('./router/productRouter')

const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

// mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL )
.then(() => {
    console.log("Connected to DB")
})
.catch(() => {
    console.log("Failed to connect to the DB")
})


// Schema 
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type : String,
        unique : true
    },
    password: String,
    confirmPassword: String,
    image : String
})

// Modal
const userModel = mongoose.model("user", userSchema)

app.use('/product', productRouter)

// api 
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})

app.get('/',(req,res) => {
    res.send("Server is running...")
});


app.post('/signup', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            res.status(409).json({
                message: "Email id already registered",
                alert : false
            });
        } else {
            const newUser = new userModel(req.body);
            await newUser.save();
            res.status(200).json({
                message: "Successfully registered",
                alert : true
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
    }
});


app.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { email } = req.body;
        
        // Use await to wait for the promise to resolve
        const result = await userModel.findOne({ email: email }).select('-password -confirmPassword');

        if (result) {
            res.status(200).json({
                message: "Login Successfully",
                alert: true,
                data: result
            });
        } else {
            res.status(404).json({
                message: "User not found",
                alert: false
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
