# MILESTONE 3 #

## Database Documentation ##

We will have two databases to work with, one for all user data and one for the movie data. For user data, we will be using a PostgreSQL database.

Users Table                                                     

| Column       | Data Type | Description              |         
|--------------|-----------|--------------------------|
| username     | String    | The name of the user     | 
| password_hash| String    | The password for users   |


User Data Table Linked to the users table

| Column       | Data Type   | Description                  |
|--------------|-------------|------------------------------|
| picture      | img         | Profile picture of user      |
| genres       | List[String]| List of user's top genres    | 
| watch_history| List[String]| List of user's watched movies|
| friends      | List[String]| List of user's friends       |
