const express = require('express'); // express itself w/ CommonJS
const app = express(); // this is the "app"
app.use(express.static('Zayin'));
const port = 8000;     // we will listen on this port

app.get('/login/', (req, res) => {  // when you go to the root, hello!
  console.log("inside");
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
 };
 console.log(response);
 res.send(JSON.stringify(response));
  //res.sendFile('../index.html');
});

// app.post('/login/', (req, res) => {  // when you go to the root, hello!
//   console.log("inside");
//   response = {
//     first_name:req.query.username,
//     last_name:req.query.password
//  };
//  console.log(response);
//  res.send(JSON.stringify(response));
//   //res.sendFile('../index.html');
// });


// app.post('/login/', function (req, res) {
//   // Prepare output in JSON format
//   console.log("inside");
//   response = {
//      first_name:req.body.username,
//      last_name:req.body.password
//   };
//   console.log(response);
//   res.send(JSON.stringify(response));
// })

//app.use('/', express.static('index.html'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

