const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/users");
const PORT = 5000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);
dotenv.config();
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}
connectToDatabase();


app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
