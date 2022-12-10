import express, { response } from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import { MiniCrypt } from './miniCrypt.js';
import MovieDB from 'node-themoviedb';

const app = express(); 
app.use(express.static("public"));
app.use(bodyParser.json());
const port = 8000; 


let curr_user = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public/html'));


const mc = new MiniCrypt();

//SHOULD UNCOMMENT IN MAIN WHICH IS DEPLOYED TO HEROKU
const uri = process.env.MONGODB_URI;

let database = "";
let collection = "";

const mdb = new MovieDB("2689ce531204fb32c1a0ca82f46d0191");

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    database = client.db('zayin-db');
    collection = database.collection('users');
  }).catch(console.error);
  

app.get("/accountsetting", async function (req, res) {
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

  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.delete('/user/delete', (req, res) => {
  // Handle delete event here
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

  const friend = await collection.find({"username": req.body.f_name}).toArray();

  if(friend.length === 0){
    console.log("Friend does not exist");
  }
  else{
    console.log("Friend exists");
    console.log(friend)
  
    collection.findOneAndUpdate(
      {username: curr_user},
      {
       $push: {
        friends : {"f_name": req.body.f_name, "f_movies": friend[0].watch_history}
       }
      },
      {
        upsert: true
      }
      ).then(result => {
        console.log(result);
      }).catch(error => console.error(error));
  }
});

app.get("/friends", async function (req, res){
  console.log("In friends get");
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  return res.json(user);
});


app.get("/update_dashboard", async function (req, res) {
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  console.log(user);
  return res.json(user);
});


app.post('/signup', async function (req, res){
  console.log(req.body);
  const [salt, hash] = mc.hash(req.body.password_hash);
  collection.insertOne({"username": req.body.username, "password_hash": hash, "salt": salt, "watch_history": [], "genres": [], "friends": []}).then(result => {
    console.log(result);
    curr_user = req.body.username;
  }).catch(error => console.error(error));
  res.redirect('/AccountSetting.html');
})

app.get("/movie", async function (req, res){
  console.log("In movie from server.js");
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  return res.json(user);
});

app.post('/', async function (req, res){
  res.redirect('/dashboard.html');
});


app.post('/login/curruser', async function (req,res){

  curr_user = req.body.username;
  const pw = req.body.pw;
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  console.log(user);
  if (user.length === 0) {
    res.json({"valid" : "false"});
  }
  const password_hash = user[0].password_hash;
  const salt = user[0].salt;

  if (!mc.check(pw, salt, password_hash)) {
    res.json({"valid" : "false"});
  }
  else {
    res.json({"valid" : "true"});
  }
});

app.get('/login/curruser', async function (req,res) {
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  return res.json(user);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`); 
});
