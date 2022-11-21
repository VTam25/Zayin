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

app.post('/login', async function (req, res){
  res.redirect('/dashboard.html');
})

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
