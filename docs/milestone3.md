# MILESTONE 3 #

## Database Documentation ##

We will have two databases to work with, one for all user data and one for the movie data. For user data, we will be using MongoDB.

User

    user document {

      username: String,

      password_hash: String,

      picture: img,

      genres: List[String],

      watch_history: List[String],

      friends: List[String], //user's list of added friends' usernames

      movie_lists: List[Objects] //list of movie lists created with friends, indices should match up with friends list

    }


