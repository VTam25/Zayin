var express = require('express');
var app = express();
app.use(express.static('Zayin'));
let fs = require('fs');
const port = 8000;     // we will listen on this port

let users = [];
const JSONfile = './users.json';

// MAKE SURE TO CALL THIS FUNCTION SOMEWHERE
function reload(filename) {
   if (fs.existsSync(filename)) {
       // TODO: Read in counter from file
       const str = fs.readFileSync(JSONfile);
       users = JSON.parse(str);
   } else {
      users = {};
   }
}

// This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// This responds a DELETE request for the /del_user page.
app.delete('/del_user/', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   console.log(req);
   // const { id } = req.params;
   // const user_to_delete = users.find(user => uers.id === id);
   // if (user_to_delete) {
   //    users = users.filter(user => user.id !== id);
   //    res.status(200).json.json(user_to_delete);
   // } else {
   //    res.status(404).json({message: "The user you are looking for does not exist."})
   // }
   delete users[req]
   fs.writeFileSync(JSONfile, JSON.stringify(users));
   res.write("<h1> user " + req + " deleted </h1>");
   res.send(JSON.stringify(response));
})

// This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

reload(JSONfile);
