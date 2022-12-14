import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import hotelRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB.');
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB.');
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo');
})

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRouter);
app.use('/api/users',userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8800, () => {
  connect();
})