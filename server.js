const express = require('express'); 
const app = express(); 
app.use(express.static("public"));
const port = 8000;    

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

app.get("/", async function (req, res){
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('zayin-db');
    const collection = database.collection('users');

  }
  catch(err){
    console.log(err);
  }
  finally{
    await client.close();
  }
});


app.use('/', express.static('public/html'));

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

