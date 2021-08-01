require('dotenv').config();
const express= require('express');
const app= require('express');
const path= require('path');
const bodyParser = require('body-parser');
const jwt= require('jsonwebtoken');
const app= require('express');
const payload= require('payload')
const mongoose=  require('mongoose');
const port= 3000;
const session = require('express-session');
const { response } = require('express');
const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(PUBLIC_KEY, SECRET_KEY);
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: 'true'}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json());

const appSecret= FLWSECK_TEST-fa4a2419a0298a906146f98caa487c0-X;
const appKey= FLWPUBK_TEST-fbfb9aee9f59066b475094e0ecd7517be-X;

payload.init({
    url: 'https://api.flutterwave.com/v3/charges',
    secret: 'SECRET_KEY',
    mongoURL: 'mongodb://localhost/payload',
    express: app,
  })

mongoose.connect("mongodb+srv://cluster0.taglv.mongodb.net/myFirstDatabase" --username Eagle)
console.log('The data is ready')
})