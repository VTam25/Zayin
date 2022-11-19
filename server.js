const express = require('express'); 
const app = express(); 
app.use(express.static("public"));
const port = 8000;    

app.use('/', express.static('public/html'));

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://team:FOQvCBE0VEC81Fbv@zayin-east.79pggjl.mongodb.net/zayin-db?retryWrites=true&w=majority"; 
//maybe need to hide this with secrets or get the line below to work
//const uri = process.env.MONGODB_URI;


app.get("/friends", async function (req, res){
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

    const user = await collection.find({"username": "Viv"}).toArray();
    console.log(user[0].friends);
    return res.json(user);
  } catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
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

