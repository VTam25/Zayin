import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import { MiniCrypt } from './miniCrypt.js';
import MovieDB from 'node-themoviedb';

// const express = require('express'); 
// const bodyParser = require('body-parser');

const app = express(); 
app.use(express.static("public"));
const port = 8000;   

let curr_user = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public/html'));

// const { MongoClient } = require("mongodb");

// const MC = require('./miniCrypt');
const mc = new MiniCrypt();

//ONLY FOR LOCAL TESTING, DELETE FOR FINAL
const uri = "mongodb+srv://team:FOQvCBE0VEC81Fbv@zayin-east.79pggjl.mongodb.net/zayin-db?retryWrites=true&w=majority"; 

//SHOULD UNCOMMENT IN MAIN WHICH IS DEPLOYED TO HEROKU
//const uri = process.env.MONGODB_URI;
let database = "";
let collection = "";

const mdb = new MovieDB("2689ce531204fb32c1a0ca82f46d0191");

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    database = client.db('zayin-db');
    collection = database.collection('users');
  }).catch(console.error);
  
  
  app.get("/accountsetting", async function (req, res) {
  // curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.put('/watchHistory/save', async (req, res) => {
  collection.findOneAndUpdate(
    { username: curr_user },
    {
      $set: {
        watch_history: req.body.watch_history,
      }
    },
    {
      upsert: true
    }
  )
  // curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.put('/topGenres/save', async (req, res) => {
  collection.findOneAndUpdate(
    { username: curr_user },
    {
      $set: {
        genres: req.body.genre,
      }
    },
    {
      upsert: true
    }
  )
  curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.delete('/user/delete', (req, res) => {
  // Handle delete event here
  console.log(req.body.name);

  collection.deleteOne(
    { username: req.body.name }
  )
  .then(result => {
    res.json(`Deleted ${req.body.name}`)
  })
  .catch(error => console.error(error))
});

app.put("/friends/add", async function (req, res){
  console.log("In friends add");
  console.log(req.body);
  collection.findOneAndUpdate(
    {username: curr_user},
    {
     $push: {
      friends : {"f_name": req.body.f_name, "f_movies": "[]"}
     }
    },
    {
      upsert: true
    }
    ).then(result => {
      console.log(result);
    }).catch(error => console.error(error));
});

app.get("/friends", async function (req, res){
  console.log("In friends get");
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  return res.json(user);

});

app.post('/signup', async function (req, res){
  console.log(req.body);
  const [salt, hash] = mc.hash(req.body.password_hash);
  collection.insertOne({"username": req.body.username, "password_hash": hash, "salt": salt}).then(result => {
    console.log(result);
    curr_user = req.body.username;
  }).catch(error => console.error(error));
  res.redirect('/AccountSetting.html');
})

app.post('/', async function (req, res){
  res.redirect('/dashboard.html');
});


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`); 
});
