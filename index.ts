// index.ts
import express, { Application } from 'express';
import userRouter from './routes/user';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = 4000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

