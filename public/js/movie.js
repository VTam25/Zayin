const genre = window.sessionStorage.getItem("selected_genre");
const friend = window.sessionStorage.getItem("movie_friend");
const url = `https://api.themoviedb.org/3/discover/movie?api_key=2689ce531204fb32c1a0ca82f46d0191&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`;


const history = [];
async function getHistory(){
    console.log("in get history");
    await fetch("/movie")
    .then((response) => response.json())
    .then((data) => {
        const user_history = data[0].watch_history;
        let friend_history = [];
        const friends_arr = data[0].friends;

        //get friend movie history
        for(const entry in friends_arr){
            if(entry.f_name === friend){
                friend_history = entry.f_movies;
            }
        }

        const temp = user_history.concat(friend_history);
        console.log(temp);
        for(const m of temp){
            console.log(m);
            history.push(m);
        }
    });
    console.log(history);
}

const movie_list = [];
async function getList(){
    console.log("in get list");
    await getHistory()
    await fetch(url)
    .then(function(response) {
        // fetch success, convert repsonse to JSON
        if(response.ok) return response.json();
        // fetch failed
        throw new Error('Request failed.');
    })
    .then(function(data) {
        // conversion to JSON success
        //console.log(data);
        let counter = 0;
        while(movie_list.length != 10){
            const movie = data.results[counter].title;
            if(!history.includes(movie)){
                movie_list.push(movie);
            }
            counter++;
        }
    })
    .catch(function(error) {
        // handle failure
        console.log(error);
    });

    console.log('fetch() request sent');
}

async function showList(){
    await getList();
    console.log(movie_list);

    const movieOL = document.getElementById("m_list");
    
    for(const entry of movie_list){
        // console.log(entry);
        // console.log("level");
        const newM = document.createElement("li");
        newM.classList.add("movie");
        newM.innerHTML = entry;
        movieOL.appendChild(newM);
      }
}

window.onload = await showList();