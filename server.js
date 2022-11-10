const express = require('express'); 
const app = express(); 
app.use(express.static('Zayin'));
const port = 8000;    

app.get('/login/', (req, res) => {  
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
 };
 console.log(response);
 res.send(JSON.stringify(response));
});

app.post('/login/', (req, res) => {  
  response = {
    first_name:req.query.username,
    last_name:req.query.password
 };
 console.log(response);
 res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

