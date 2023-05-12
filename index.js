const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
//database
const database = module.exports = () => {
    const connectionParams = {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect('mongodb+srv://Hyun:isehOcH4i8tjO8nu@cluster0.ms8xz8f.mongodb.net/?retryWrites=true&w=majority');
        console.log('database connected')
    } catch (error) {
        console.log(error);
        console.log('failed');
    }
}

database();

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(5000, () => {
    console.log("backend is running");
});