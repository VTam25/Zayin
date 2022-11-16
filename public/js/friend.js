'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');
 
let friend = {};
const JSONfile = 'json/updateTest.json';

// MAKE SURE TO CALL THIS FUNCTION SOMEWHERE
function reload(filename) {
    if (fs.existsSync(filename)) {
        // TODO: Read in counter from file
        let str = fs.readFileSync(JSONfile);
        friend = JSON.parse(str);
    } else {
	    friend = {};
    }
}

function showList(response) {
    // TODO
    response.write("<h1> Current Friends: </h1>")
    response.write(JSON.stringify(friend));
    response.end();
}

function addFriend(name, response) {
    friend[name] = "No Movie List";

    // TODO
    fs.writeFileSync(JSONfile, JSON.stringify(friend));
    response.write("<h1> Friend created </h1>");
    response.end();
}
 
 
const headerText = { "Content-Type": "text/html" };

let server = http.createServer();
server.on('request', async (request, response) => {
    response.writeHead(200, headerText);
    let options = url.parse(request.url, true).query;
    //response.write(JSON.stringify(options));

    if (request.url.startsWith("/add")) {
        addFriend(options.name, response);
        return;
    }
    if (request.url.startsWith("/show")) {
        showList(response);
        return;
    }
    else {
        response.write("no command found.");
    }
    response.end();
});
reload(JSON.file);
server.listen(8080);

// document.getElementById('add_btn').addEventListener("click", async (event) => {
//     console.log("event");
//     const newFriend = document.getElementById("friend_name").value;
//     const response = fetch('http://localhost:8000/friends/');
// });
