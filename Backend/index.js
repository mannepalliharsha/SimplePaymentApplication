const express=require('express');
const app=express();
const cors=require('cors');
const mainrouter=require('./Routes/parentrouter');
app.use(cors());
app.use(express.json());
app.use('/login',mainrouter);
app.listen(600);