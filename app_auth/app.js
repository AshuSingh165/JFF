const express = require('express');
const app = express();
const PORT = 8000;
const connectdb= require('./db/datebase')
const cors = require('cors')
// const user = require('./Modal/user_schema')
const router = require('./Routers/user_routes')
// Database Connection
connectdb()

app.use(express.urlencoded({extended:false}))
app.use(express.json());

// React router is using here
app.use("/api/user",cors(), router)
// app.use(cors({ origin: true }));

app.listen(PORT, ()=>{console.log(`server started successfully at PORT: ${PORT}`)})
