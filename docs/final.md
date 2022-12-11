
# Zayin 
## Application Name: Pop!
### Semester: Fall 2022
### Overview

Pop! is a web app that helps you and a friend decide on the perfect new movie to watch! While other movie recommendation apps or features exist, we build upon them by automatically filtering out the user and friend’s watch history from our movie list. 


### Team Members:
Vivienne Tam - @VTam25


Foram Patel - @p4telf


Tengfei Louie - @louie7679


### User Interface
<img width="1438" alt="Screen Shot 2022-12-10 at 8 59 08 PM" src="https://user-images.githubusercontent.com/26626021/206883353-ccecb466-538c-453d-9d95-e7bf07b27bc3.png">

Sign Up page where a user can create an account 

<img width="1440" alt="Screen Shot 2022-12-10 at 8 59 42 PM" src="https://user-images.githubusercontent.com/26626021/206883365-45dd2646-36e1-4db6-9c9e-53210bf70811.png">

Log In page where user can log in to their account 

<img width="1440" alt="Screen Shot 2022-12-10 at 9 03 56 PM" src="https://user-images.githubusercontent.com/26626021/206883381-3fe0fc43-a92b-4757-9dec-3c60b67c54bf.png">

Dashboard page that displays user account data 

<img width="1440" alt="Screen Shot 2022-12-10 at 9 08 02 PM" src="https://user-images.githubusercontent.com/26626021/206883501-4c479f6b-1c38-4b11-a372-9f7f5d9a372a.png">

Part of the dashboard that allows you to select a friend to create a blend of movies

<img width="1440" alt="Screen Shot 2022-12-10 at 9 08 33 PM" src="https://user-images.githubusercontent.com/26626021/206883508-ed122d10-a951-4ab0-abdc-b3f8352fca7c.png">

Confirmation page to create movie list with a selected genre

<img width="1440" alt="Screen Shot 2022-12-10 at 9 09 33 PM" src="https://user-images.githubusercontent.com/26626021/206883518-6693d4c0-9b80-4e3e-820d-5aaa24ada12a.png">

Movie List page that gives user movies within their selected genre

<img width="1440" alt="Screen Shot 2022-12-10 at 9 09 55 PM" src="https://user-images.githubusercontent.com/26626021/206883533-a549733b-3c0c-4b88-8d40-9cbf44f3f861.png">

Friends List page that shows user's friends and lets you add a friend

<img width="1440" alt="Screen Shot 2022-12-10 at 9 09 55 PM" src="https://user-images.githubusercontent.com/26626021/206883551-9ba32e9f-5cab-485b-843c-79bf3281af2f.png">

Account Settings page that allows you to add top genres, recently watched movies, and delete your account. You can also change your profile picture on this page but it is not saved to the database or updated in the rest of the application.

### APIs/URL Routes/Mappings

![Untitled Notebook-24 2](https://user-images.githubusercontent.com/100488724/206887914-6c2cc9ec-2040-4b77-a0f6-dcc0a643dedf.jpg)

### Authentication/Authorization
We use password encrytion and salts using the crypto Node.js library and MiniCrypt wrapper provided in class. When creating an account through the Sign Up page, the password hash and corresponding user salt is saved to the database. When a user tries to log in, we authenticate that the user's typed password matches what we have saved after hashing with sha256_hash and the saved salt. If you have not logged in or signed up with an account, the buttons on the navigation bar for Dashboard, Friends List, and Account Settings will not lead anywhere.


### Division of Labor
#### Front End
Vivienne Tam
- Sign Up page
- Friends List page
- Movie List page


Foram Patel
- Login page
- Dashboard page
- Drew the logo and wireframe


Tengfei Louie
- Account Settings page
- Confirmation page
- Navigation bar

#### Back End
Vivienne Tam
- Password encryption
- Creating an account
- Add friends/show friends on Friends List page
- Create and show movie list through Confirmation page and Movie List page
- Logout

Foram Patel
- Log in to an account
- User/password authentication
- Read account data and display it on dashboard

Tengfei Louie
- Read user data and display it on Account Settings 
- Update user's top genres and recently watched movies through Account Settings
- Delete an account through Account Settings

#### Documentation
Everyone worked on writing each milestone and creating the video demo.

### Conclusion
Through this project, our team had the opportunity to experience the entire software development process, from the initial design of the web application through the actual implementation to the final deployment of the application.  Setting up and connecting MongoDB to Heroku was initially challenging for our team. Our team had difficulty getting the server started and using express routing to make requests. Our team would have liked to know how to set up the API endpoints using express before starting the project since that’s the part our team spends the most time working on. Some technical hurdles our team has encountered are sometimes our app hosted on Heroku not working correctly.
