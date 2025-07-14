// index.js
const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const port = 4000;
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

