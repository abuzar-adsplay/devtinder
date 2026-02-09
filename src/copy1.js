const express = require('express');

const app = express();

// app.use("/",(req ,res)=>{
//     res.send("hello from the dashboard");
// })

app.use("/hello/2",(req ,res)=>{
    res.send("hello hello22");
})

app.use("/hello",(req ,res)=>{
    res.send("hello hello");
})

app.use("/test",(req ,res)=>{
    res.send("hello from the server");
})

app.listen(3000,()=>{
    console.log('server is sucessfully listeing on port 3000');
});