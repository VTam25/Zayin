const genre = window.sessionStorage.getItem("selected_genre");
const friend = window.sessionStorage.getItem("movie_friend");
const url = `https://api.themoviedb.org/3/discover/movie?api_key=2689ce531204fb32c1a0ca82f46d0191&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`;

const history = [];

function getHistory(curr_user, friend){

}

function getList(history){
    console.log("hello");
    fetch(url)
    .then(function(response) {
        // fetch success, convert repsonse to JSON
        if(response.ok) return response.json();
        // fetch failed
        throw new Error('Request failed.');
    })
    .then(function(data) {
        // conversion to JSON success
        console.log(data);
    })
    .catch(function(error) {
        // handle failure
        console.log(error);
    });

    console.log('fetch() request sent');
}

window.onload = getList();