import { connectDb }from './Db/db.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoutes.js';
import authUserRoute from './Routes/authUserRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


//middlewares

app.use(express.json());
app.use(cors());
//connectivity with routes
connectDb();
//http://localhost:5000/api/user/Signup
app.use("/api/user", userRoute);
app.use("/api/authuser", authUserRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

