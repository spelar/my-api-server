// index.ts
import express, { Application } from 'express';
import userRouter from './routes/user';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app: Application = express();
const port = 4000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10, 
  message: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(cors({
  origin: ['https://spelar.shop', 'https://www.spelar.shop'],
}));
app.use(express.json());
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

