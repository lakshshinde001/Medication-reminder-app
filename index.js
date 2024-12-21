import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from "../backend/routes/userRoutes.js"

dotenv.config();

const PORT = process.env.PORT ||  3001

const app = express();
app.use(express.json());
connectDB()

app.use('/api/v1/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})
