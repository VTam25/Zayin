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

How to Test:

1. Start by logging in with the following credentials:
Username: viv
Password: tester

Without existing credentials, you can click the "Sign Up" button which will navigate to the sign up page. Here, new credentials can be created and would look like this: 

![image](https://user-images.githubusercontent.com/100488724/202967751-7b7a8ad3-7ccd-497b-96c5-b9c0d5722096.png)
![image](https://user-images.githubusercontent.com/100488724/202967715-3c88d453-ed2e-485d-8dc5-524ce0f61a2a.png)

You can see the "viv" user we use for testing purposes here, along with already populated user data such as genres, watch history and friends.


2. This is your user dashboard. Here you can see your friends and top genres which has been populated using the data from MongoDB. If you click on a "Select Friend" button, it will bring you to page to create a movie list.  

3. Through the navigation bar, you can click on "Friends List". This will take you to the friends list which has been populated with data from MongoDB. Adding a friend will add another friend to the database. Currently, this adds another profile picture for the new friend, but we are working on fixing a bug that prevents the name from showing up as well. If you click on a friend, it will bring you to a previously generated movie list. 

4. Through the navigation bar, you can click on "Account Settings". This will take you to a page where you can view user information. You can also view the auto-populated watch history and genres.

5. You can log out using the navigation bar. 

## Part 3: Deployment ##

https://zayin.herokuapp.com/

## **Division of Labor**

Foram Patel

* Login Page
* Dashboard
* Wrote milestone3.md
* Updated respective pages with data from database

Tengfei Louie


* Navigation Bar
* Account Settings
* Confirmation Page
* Wrote milestone3.md
* Created global user 
* Updated respective pages with data from database


Vivienne Tam

* Wrote milestone3.md
* Sign up page
* Friends list page
* Movie list page
* Linked MongoDB to Heroku
* Updated respective pages with data from database
