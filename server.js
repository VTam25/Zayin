const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
app.use(express.static("public"));
const port = 8000;   

let curr_user = "";


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public/html'));

const { MongoClient } = require("mongodb");

//const uri = "mongodb+srv://team:FOQvCBE0VEC81Fbv@zayin-east.79pggjl.mongodb.net/zayin-db?retryWrites=true&w=majority"; 
//maybe need to hide this with secrets or get the line below to work
const uri = process.env.MONGODB_URI;
let database = "";
let collection = "";

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

app.put("/friends", async function (req, res){
  console.log("In friends put");
  console.log(req.body);
  curr_user = "Viv"; //temporary, delete later 
  collection.findOneAndUpdate(
    {username: curr_user},
    {
     $push: {
      friends : {"f_name": req.body.f_name, "f_movies": ""}
     }
    },
    {
      upsert: false
    }
    ).then(result => {
      console.log(result);
      res.json("Success");
    }).catch(error => console.error(error));
});

app.get("/friends", async function (req, res){
  console.log("In friends get");
  curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({"username": `${curr_user}`}).toArray();
  return res.json(user);

});

app.post('/signup', async function (req, res){
  console.log(req.body);
  collection.insertOne(req.body).then(result => {
    console.log(result);
    console.log(req.body.username);
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
