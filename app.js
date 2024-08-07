import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import studentRoute from './routes/studentRoutes.js'


dotenv.config()
const app = express();
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/', route)
app.use('/', studentRoute)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
}) 