const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require('passport');
const jwt = require('jsonwebtoken');

const secret = ')*(ylsdhf7';



const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use((req, res, next) => {
  let auth = req.header('Authorization');
  if(auth){
    try{
      const payload = jwt.verify(auth.substring('token '.length), secret);
      req.user = payload;
      next();
    } catch(e){
      res.status(401).exit();
    }
  } else {
    next();
  }
})

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use('/api/plans', require('./backend/routes/plans'))
app.use('/api/drinkcategories', require('./backend/routes/drinkCategory'))
app.use('/api/drinks', require('./backend/routes/drinks'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/blackout-preventer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });


// seed
require('./backend/seeds.js')

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});