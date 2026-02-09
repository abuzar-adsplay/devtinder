const express = require('express');

const app = express();

// this will only handle Get call to / user

app.use("/user", (req , res)=>{
    res.send("HAHAHAHA");
})
app.get("/user", (req , res)=>{
    res.send({firstName :"abuzar" , "lastname":"gaur"});
})

app.post("/user", (req , res)=>{
    res.send("data sucessfully save to database");
})
app.delete("/user", (req , res)=>{
    res.send("delete sucessfully");
})
//this will match all the HTTP method API calls to /test 

app.use("/test",(req ,res)=>{
    res.send("hello from the server");
})

app.listen(3000,()=>{
    console.log('server is sucessfully listeing on port 3000');
});