const express = require("express");

const app = express();

// app.use("/route",rH, [ rH2,rH3] ,rH4 ,rH5)

app.use(
  "/user",
  [
    (req, res, next) => {
    // Route Handler
    //  res.send("Route Handler 1")
    console.log("Handling the routes user;");
    // res.send("Response!!");
    next();
  },
  (req, res,next) => {
    console.log("Handling the routes user 2;");
    // res.send("Response! 2");
    next()
  },
  (req, res,next) => {
    console.log("Handling the routes user 3;");
    // res.send("Response! 3");
    next()
  },
  (req, res,next) => {
    console.log("Handling the routes user 4;");
    // res.send("Response! 4");
    next()
  },
  (req, res,next) => {
    console.log("Handling the routes user 5;");
    res.send("Response! 5");
  }
  ]
);

app.listen(3000, () => {
  console.log("server is sucessfully listeing on port 3000");
});
