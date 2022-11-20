// user watch history
let watch_history_data;

fetch("/accountsetting")
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]['watch_history']);
        watch_history_data = data[0]['watch_history'];
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
            // body: JSON.stringify({
            //   name: 'Darth Vader',
            //   quote: 'I find your lack of faith disturbing.'
            // })
            body: JSON.stringify({
                watch_history: watch_history_data
            })
        })
    };

    console.log(JSON.stringify({ watch_history: watch_history_data }));

    // fetch('/accountsetting', {
    //     method: 'put',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         watch_history: watch_history_data
    //     })
    // });

    // get updated user watch history list
    // fetch("/accountsetting")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data[0]['watch_history']);
    //         watch_history_data = data[0]['watch_history'];
    //     });

}

document.getElementById('genre_input').addEventListener("click", addGenre);

function addGenre() {
    const top_genre_input = document.getElementById('top_genres').value;

    if (top_genre_input.length > 0) {
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
