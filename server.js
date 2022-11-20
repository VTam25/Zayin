const express = require('express');
const app = express();
app.use(express.static("public"));
const port = 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use('/', express.static('public/html'));

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://team:FOQvCBE0VEC81Fbv@zayin-east.79pggjl.mongodb.net/zayin-db?retryWrites=true&w=majority";
//maybe need to hide this with secrets or get the line below to work
//const uri = process.env.MONGODB_URI;


app.get("/friends", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

    const user = await collection.find({ "username": "Viv" }).toArray();
    // console.log(user[0].friends);
    console.log(user);
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.get("/accountsetting", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

    const user = await collection.find({ "username": "Viv" }).toArray();
    // console.log(user[0].friends);
    console.log(user);
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// app.put('/accountsetting', async (req, res) => {
//   console.log(req.body);
//   const database = client.db('zayin-db');
//   const collection = database.collection('users');

//   collection.findOneAndUpdate(
//     { username: 'Viv' },
//     {
//       $set: {
//         watch_history: req.body.watch_history,
//       }
//     }
//   )
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => console.error(error))
// });

app.put('/watchHistory/save', async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

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

    const user = await collection.find({ "username": "Viv" }).toArray();
    return res.json(user);

  } catch (err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  // collection.findOneAndUpdate(
  //   { username: 'Viv' },
  //   {
  //     $set: {
  //       watch_history: req.body.watch_history,
  //     }
  //   }
  // )
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => console.error(error))
});

app.put('/topGenres/save', async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

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

    const user = await collection.find({ "username": "Viv" }).toArray();
    return res.json(user);

  } catch (err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})

app.get("/confirmationpage", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('zayin-db');
    const collection = database.collection('users');

    const user = await collection.find({ "username": "Viv" }).toArray();
    // console.log(user[0].friends);
    console.log(user);
    return res.json(user);
  } catch (err) {
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

