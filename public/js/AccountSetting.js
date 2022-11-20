// user watch history
let watch_history_data = [];
// user top genre
let top_genres_data = [];

fetch("/accountsetting")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // check if there is any existing user in our database
        if (data.length > 0) {
            // try to get the first user information in our database
            if ("watch_history" in data[0]) {
                // console.log(data[0]['watch_history']);
                watch_history_data = data[0]['watch_history'];
            }

            if ("genres" in data[0]) {
                top_genres_data = data[0]['genres'];
            }
        }

        console.log(watch_history_data);
        console.log(top_genres_data);

        // load existing watch history data on user's database to the webpage
        for (let i = 0; i < watch_history_data.length; i++) {
            const movieList = document.getElementById('movie_list');
            const theP = document.createElement("p");
            const movie = watch_history_data[i];
            theP.innerHTML = movie;
            movieList.appendChild(theP);
        }

        // load existing top genres data on user's database to the webpage
        for (let i = 0; i < top_genres_data.length; i++) {
            const genreList = document.getElementById('genre_list');
            const theP = document.createElement("p");
            const genre = top_genres_data[i];
            theP.innerHTML = genre;
            genreList.appendChild(theP);
        }
    });

document.getElementById('picture').addEventListener("change", loadFile);

function loadFile(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

// highlight in red if not in database
document.getElementById('watch_history').addEventListener("keyup", color);

function color() {
    const watch_history_input = document.getElementById('watch_history').value;
    if (watch_history_input.length != 0 && watch_history_data.includes(watch_history_input)) {
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

    if (watch_history_input.length > 0 && !watch_history_data.includes(watch_history_input)) {
        const movieList = document.getElementById('movie_list');
        const theP = document.createElement("p");
        theP.innerHTML = watch_history_input;
        movieList.appendChild(theP);
        watch_history_data.push(watch_history_input);

        fetch('/watchHistory/save', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                watch_history: watch_history_data
            })
        })
    }

    console.log(JSON.stringify({ watch_history: watch_history_data }));

    // fetch('/accountsetting', {
    //     method: 'put',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         watch_history: watch_history_data
    //     })
    // });

    // get updated user watch history list
    fetch("/accountsetting")
        .then((response) => response.json())
        .then((data) => {
            watch_history_data = data[0]['watch_history'];
        });

    console.log(watch_history_data);
}

document.getElementById('genre_input').addEventListener("click", addGenre);

function addGenre() {
    const top_genre_input = document.getElementById('top_genres').value;

    if (top_genre_input.length > 0 && !top_genres_data.includes(top_genre_input)) {
        const genreList = document.getElementById('genre_list');
        const theP = document.createElement("p");
        theP.innerHTML = top_genre_input;
        genreList.appendChild(theP);
        top_genres_data.push(top_genre_input);

        fetch('/topGenres/save', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                genre: top_genres_data
            })
        })
    };

    // get updated user top genre list
    fetch("/accountsetting")
        .then((response) => response.json())
        .then((data) => {
            top_genres_data = data[0]['genres'];
        });
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
