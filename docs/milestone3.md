# MILESTONE 3 #

## Database Documentation ##

We will have two databases to work with, one for all user data and one for the movie data. For user data, we will be using MongoDB.

User

    user document {

      username: String,

      password_hash: String,

      picture: String, //path to img file

      genres: List[String],

      watch_history: List[String],

      friends: List[Object], //user's list of added friend objects
      //Friend object is {"f_name": "name", "f_movies": List}

    }


For the movie data we will be using The Movie Database API.

