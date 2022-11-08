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
        document.getElementById('watch_history').style.backgroundColor = 'red';
    } else {
        document.getElementById('watch_history').style.color = 'black';
        document.getElementById('watch_history').style.backgroundColor = 'white';
    }
}

document.getElementById('movie_input').addEventListener("click", addMovie);

function addMovie() {
    const watch_history_input = document.getElementById('watch_history').value;
    const movieList = document.getElementById('movie_list');
    const theP = document.createElement("p");
    console.log(watch_history_input);
    theP.innerHTML = watch_history_input;
    movieList.appendChild(theP);
}

document.getElementById('genre_input').addEventListener("click", addGenre);

function addGenre() {
    const top_genre_input = document.getElementById('top_genres').value;
    const genreList = document.getElementById('genre_list');
    const theP = document.createElement("p");
    theP.innerHTML = top_genre_input;
    genreList.appendChild(theP);
}
