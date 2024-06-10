const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Stripe = require('stripe');
const productRouter = require('./router/productRouter');
const bcrypt = require('bcrypt');

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
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            res.status(409).json({
                message: "Email id already registered",
                alert: false
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new userModel({
                email: email,
                password: hashedPassword,
            });

            await newUser.save();

            res.status(200).json({
                message: "Successfully registered",
                alert: true
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
        const { email, password } = req.body;
        
        const user = await userModel.findOne({ email: email });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                res.status(200).json({
                    message: "Login Successfully",
                    alert: true,
                    data: { email: user.email, }
                });
            } else {
                res.status(401).json({
                    message: "Incorrect password",
                    alert: false
                });
            }
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


/** Payment5 Gateway */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
console.log(process.env.FRONTEND_URL)


// app.post("/checkout-payment", async (req, res) => {
//     console.log(req.body);
//     try {
//         const lineItems = req.body.map((item) => {
//             return {
//                 price_data: {
//                     currency: "inr",
//                     product_data: {
//                         name: item.productName,
//                         // images: [item.image]
//                     },
//                     unit_amount: item.price * 100,
//                 },
//                 quantity: item.qty,
//             };
//         });

//         const params = {
//             submit_type: 'pay',
//             mode: "payment",
//             payment_method_types: ['card'],
//             billing_address_collection: "auto",
//             shipping_options: [{ shipping_rate: "shr_1OmFxdSI84hvQ9b0RzUkJeAE" }],
//             line_items: lineItems,
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         };

//         const session = await stripe.checkout.sessions.create(params);
//         res.status(200).json({ sessionId: session.id });
//     } catch (err) {
//         console.error("Error in /checkout-payment:", err.message);
//         res.status(err.statusCode || 500).json({ error: "Failed to initiate payment" });
//     }
// });

app.post("/checkout-payment", async (req, res) => {
    try {
        const lineItems = req.body.map((item) => {
            return {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.productName,
                        // images: [item.image]
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.qty,
            };
        });

        const params = {
            submit_type: 'pay',
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            shipping_options: [{ shipping_rate: "shr_1OnKvhSJcV1EyojS7yUYYhjF" }],
            line_items: lineItems,
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        };

        // Additional customer information
        const customerEmail = 'hiteshnavghade75@gmail.com'; // Replace with actual customer email
        const clientReferenceId = 'your_unique_customer_identifier'; // Replace with a unique identifier for the customer

        const session = await stripe.checkout.sessions.create({
            ...params,
            customer_email: customerEmail,
            client_reference_id: clientReferenceId,
        });

        res.status(200).json({ sessionId: session.id });
    } catch (err) {
        console.error("Error in /checkout-payment:", err.message);
        res.status(err.statusCode || 500).json({ error: "Failed to initiate payment" });
    }
});





