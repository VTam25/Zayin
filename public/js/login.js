//import user from './server.js'

document.getElementById('submit').addEventListener("click", async (event) => {
    console.log("event");
    console.log(document.getElementById('uname'));
    curr_user = document.getElementById('uname').value;

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


