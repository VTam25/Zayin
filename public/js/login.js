//import user from './server.js'

// import e from "express";
// import { MiniCrypt } from '../../miniCrypt.js';

// const mc = new MiniCrypt();

// function setCurUser(curr_user) {

//     fetch("/login/curruser", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             "username": curr_user
//             "p"
//         })
//     });
// }

// function check(pw) {
//     fetch("/top-genres")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("inside data");
//         let password_hash = data[0].password_hash;
//         let salt = data[0].salt;
//         if (!mc.check(pw, salt, password_hash)) {
//             window.alert("Incorrect Password");
//         }
//         else {
//             location.href = "../html/dashboard.html"
//         }
//         console.log("inside request");
//         console.log(data[0]);
//     });


// }

document.getElementById('submit').addEventListener("click", async (event) => {
//     console.log("event");
    // console.log(document.getElementById('uname'));
    let curr_user = document.getElementById('uname').value;
    let pw = document.getElementById('pass').value;


    fetch("/login/curruser", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": curr_user,
            "pw": pw
        })
    });

    // setCurUser(curr_user);
    // check("user");
    // console.log(curr_user);
    // console.log(pass);
    // mc.check()
   //location.href = "../html/dashboard.html"
    //setCurUser(curr_user)

    // fetch("/top-genres")
    //     .then((response) => 
    //         response.json())
    //     .then((data) => {
    //         console.log("inside request");
    //         console.log(data[0]);
    //     });


    // fetch("/login/curruser", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         "username": curr_user
    //     })
    // });

    // fetch("/accountsetting")
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("after fetch");
    //     console.log(curr_user);
    //     console.log(data[0]);

    //     // salt = data[curr_user].salt;
    //     // hash = data.password_hash;
    //     // console.log(salt);
    //     // console.log(hash);
    // });

    //fetch("/login")
    // .then((response) => response.json())
    // .then((data) => {
    //     if (data[0].password === document.getElementById('pass').value) {
           // location.href = "../html/dashboard.html";
    //     }

    //     else {
    //         window.alert("Incorrect Password");
    //         document.getElementById('uname').value;
    //         document.getElementById('pass').value;
    //     }
    // });


    





});

//document.getElementById('profile_pic')= fetch(url for get request to update the profile picture)


document.getElementById('sign-up').addEventListener("click", (event) => 
    location.href = "../html/signup.html"
);


