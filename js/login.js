document.getElementById('submit').addEventListener("click", async (event) => {
    console.log("event");
    const response = fetch('http://localhost:8000/login/'//,
    // {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({username: "username", password: "password"})
    // }
    )

    location.href = "../html/dashboard.html";

});


document.getElementById('sign-up').addEventListener("click", (event) => 
    location.href = "../html/signup.html"
);


