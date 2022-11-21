# MILESTONE 3 #

## Part 1: Database implementation ##

We will have two collection of databases to work with, one for all user data and one for the movie data. For user data, we will be using MongoDB. It includes the username and password created by the users, as well as the profile picture uploaded by the user. The user's top genres, movies watched, and friend list is also saved in the user database. 

User

    user document {
      username: String, // The name of the user

      password_hash: String, // The password entered by the user

      picture: String, //path to img file

      genres: List[String], // A list of top genres the user put would like to watch with their friends

      watch_history: List[String], // A list of past movies the user have watched
      
      friends: List[Object], //user's list of added friend objects
      //Friend object is {"f_name": "name", "f_movies": List}
    }


For the movie data we will be using The Movie Database API.

## Part 2: Back-end Functionality ##
## Part 3: Deployment ##

https://zayin.herokuapp.com/
