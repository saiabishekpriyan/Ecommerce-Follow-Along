const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors')
const app=express();
app.use(express.json());
dotenv.config();
const mongoURI=process.env.MONGO_URI;






