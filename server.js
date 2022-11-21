const express = require('express');
const app = express();
app.use(express.static("public"));
const port = 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let curr_user = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public/html'));

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://team:FOQvCBE0VEC81Fbv@zayin-east.79pggjl.mongodb.net/zayin-db?retryWrites=true&w=majority";
//maybe need to hide this with secrets or get the line below to work
//const uri = process.env.MONGODB_URI;
let database = "";
let collection = "";

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    database = client.db('zayin-db');
    collection = database.collection('users');
  }).catch(console.error);

app.get("/friends", async function (req, res) {
  curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.get("/accountsetting", async function (req, res) {
  curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": `${curr_user}` }).toArray();
  return res.json(user);
});

app.put('/watchHistory/save', async (req, res) => {
  collection.findOneAndUpdate(
    { username: 'Viv' },
    {
      $set: {
        watch_history: req.body.watch_history,
      }
    },
    {
      upsert: true
    }
  )
  curr_user = "Viv"; //temporary, delete later 
  const user = await collection.find({ "username": "Viv" }).toArray();
  return res.json(user);
});

app.put('/topGenres/save', async (req, res) => {
  collection.findOneAndUpdate(
    { username: 'Viv' },
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
  const user = await collection.find({ "username": "Viv" }).toArray();
  return res.json(user);
});


// app.use(express.static('css'));

// app.get('/login/', (req, res) => {  
//   response = {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name
//  };
//  console.log(response);
//  res.send(JSON.stringify(response));
// });

// app.post('/login/', (req, res) => {  
//   response = {
//     first_name:req.query.username,
//     last_name:req.query.password
//  };
//  console.log(response);
//  res.send(JSON.stringify(response));
// });


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

