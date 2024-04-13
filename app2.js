const express = require("express");

const app = express();

function middleware(req, res, next) {
  console.log("Am a middleware");
  const errObject = new Error("I am an Error sent to destruct your code");
  next(errObject);
}

function errorHandler(err, req, res, next) {
  if (err) {
    res.send(
      "<h1>There was an error in the server side please don't try again</h1>"
    );
  }
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("<h1>Hey</h1>");
});
app.use(errorHandler);

app.listen(3000);
