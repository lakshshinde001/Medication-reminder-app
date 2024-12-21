import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT ||  3001

const app = express();
connectDB()

app.use("/", (req, res)=> {
    res.send("HEllo");
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})
