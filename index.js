// index.js
const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const port = 4000;
const dotenv = require('dotenv');
dotenv.config();

