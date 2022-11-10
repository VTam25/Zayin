// document.getElementById('file').addEventListener("change", (event) => {
//     const image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
// });

// We can always change the data later
window.movie_data = [
    "Gone With The Wind",
    "The Wizard of Oz",
    "The Godfather",
    "The Shawshank Redemption",
    "Seven Samurai"
]

window.genre_data = [];

// Some potential JSON data we could work with 
// const user_database = {
//     "example@gmail.com": {
//         "profile_pic": "",
//         "password": "somepassword",
//         "watch_history": ["Gone With The Wind", "The Wizard of Oz", "The Godfather", "The Shawshank Redemption", "Seven Samurai"],
//         "top genre": ["action", "romance"]
//     },
//     "example2@gmail.com": {
//         "profile_pic": "",
//         "password": "somepassword",
//         "watch_history": ["Gone With The Wind", "The Wizard of Oz", "The Godfather", "The Shawshank Redemption", "Seven Samurai"],
//         "top genre": ["action", "romance"]
//     },
// };

// const top_genres = {
//     "tags": []
// }

// const movie = {
//     "name": "",
//     "genre": ""
// }

document.getElementById('picture').addEventListener("change", loadFile);

function loadFile(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

document.getElementById('watch_history').addEventListener("keyup", color);

function color() {
    const watch_history_input = document.getElementById('watch_history').value;
    if (watch_history_input.length != 0 && movie_data.includes(watch_history_input)) {
        document.getElementById('watch_history').style.color = 'white';
        document.getElementById('watch_history').style.backgroundColor = 'white';
    } else {
        document.getElementById('watch_history').style.color = 'black';
        document.getElementById('watch_history').style.backgroundColor = 'red';
    }
}

document.getElementById('movie_input').addEventListener("click", addMovie);

function addMovie() {
    const watch_history_input = document.getElementById('watch_history').value;

    if (watch_history_input.length > 0) {
        const movieList = document.getElementById('movie_list');
        const theP = document.createElement("p");
        console.log(watch_history_input);
        theP.innerHTML = watch_history_input;
        movieList.appendChild(theP);
    };
}

document.getElementById('genre_input').addEventListener("click", addGenre);

function addGenre() {
    const top_genre_input = document.getElementById('top_genres').value;
    
    if (top_genre_input.length > 0 && !movie_data.includes(watch_history_input)) {
        const genreList = document.getElementById('genre_list');
        const theP = document.createElement("p");
        theP.innerHTML = top_genre_input;
        genreList.appendChild(theP);
    };
}

document.getElementById('remove_account_button').addEventListener("click", async (name, response) => {
    if (confirm("Are you sure want to delete this user?")) {
        // your AJAX CALL HERE
        // delete user_database[name];
        // fs.writeFileSync(JSONfile, JSON.stringify(user_database));
        // console.log(event);
        const response = fetch('http://localhost:8000/del_user/?user1', 
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        // location.href = "../html/signup.html";
    };
});
