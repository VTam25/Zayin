document.getElementById("pick-friend1").addEventListener("click", (event) => {
    location.href = "ConfirmationPage.html";
    window.sessionStorage.setItem("movie_friend", "Wendy");  
});

document.getElementById("pick-friend2").addEventListener("click", (event) => {
    location.href = "ConfirmationPage.html";
    window.sessionStorage.setItem("movie_friend", "Joy");  
});

document.getElementById("pick-friend3").addEventListener("click", (event) => {
    location.href = "ConfirmationPage.html";
    window.sessionStorage.setItem("movie_friend", "Lizzie");  
});




function show_top_genres() {
    fetch("/friends")
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);

        const genres_arr = data[0].genres;

        //console.log(data[0].genres)

        const genre1 = document.getElementById('genre1');
        const theP1 = document.createElement('p');
        const text1 = document.createTextNode(genres_arr[0]);

        theP1.appendChild(text1);
        genre1.appendChild(theP1);

        const genre2 = document.getElementById('genre2');
        const theP2 = document.createElement('p');
        const text2 = document.createTextNode(genres_arr[1]);
        
        theP2.appendChild(text2);
        genre2.appendChild(theP2);


        const genre3 = document.getElementById('genre3');
        const theP3 = document.createElement('p');
        const text3 = document.createTextNode(genres_arr[2]);
        
        theP3.appendChild(text3);
        genre3.appendChild(theP3);
    })
}


function show_friends_list() {
    fetch("/friends")
    .then((response) => response.json())
    .then((data) => {
        
    })
}

window.onload = show_top_genres();
