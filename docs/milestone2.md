# **Milestone 2**

## **Part 0: Project API Planning** 


The following is our flow chart that contains the different interactions between the user and our project APIs. It contains the URLs with the endpoints that will retrieve the requested data. 




<img width="939" alt="Screen Shot 2022-11-09 at 10 34 56 PM" src="https://user-images.githubusercontent.com/100488724/200996063-1c6e70d5-2482-4550-a605-18fe806dd82a.png">

## **Part 1: Dummy Server**


To create our dummy server, we attempted to use Express and basic routing to serve our files. We created this dummy server on local port 8000 using the following code:


<img width="351" alt="image" src="https://user-images.githubusercontent.com/100488724/200997693-9a443718-b0ed-49bb-aa27-40600510e37d.png">

## **Part 2: Front-end Implementation**

We were able to get the server to run and tested it using our browser, and used event listeners to route the proper API calls. However, we were unable to make the CRUD operations connect with our dummy server and send back fake data. The following are screenshots of CRUD operations without connection to the dummy server. 


### **Create Operation**


![image](https://user-images.githubusercontent.com/100488724/201000229-0418ebd9-3af6-4fac-81d1-fd9dcf5430d8.png)


This is a screenshot of a create operation where a friend is created.


### **Update Operation**


![image](https://user-images.githubusercontent.com/100488724/201000265-ead16b74-125e-4a6a-81a0-ee34b10ff9b2.png)


![image](https://user-images.githubusercontent.com/100488724/201000202-b906ffe7-9900-4b19-a067-0fb7f985b38a.png)


This is a screenshot of an update operation where the friends list is updated. In the first screenshot, friends list was empty. In the second screenshot, friends list had Bob as a new friend.


![image](https://user-images.githubusercontent.com/100488724/200999982-c48da14f-6192-42cf-b9ca-2a6e5730175b.png)


This is a screenshot of an update operation where the user watch history and the top genres list is updated.


### **Read Operation**


![image](https://user-images.githubusercontent.com/100488724/201000499-31f27bb6-a6f2-4f21-bdfe-638fd23d9be3.png)


This is a screenshot of a read operation where the friends list is read once it has been updated.

### **Delete Operation** 


![image](https://user-images.githubusercontent.com/100488724/200999794-174f7637-cef7-443f-a167-0473984fe8d2.png)


This is a screenshot of a delete operation where a user is deleted. 



We intended to implement this functionality into the html pages but ran out of time and were unable to finish.


## **Part 3: Deployment**

We have connected Heroku to our repository, but we had issues with the server and it is currently not connecting to our app. This is the link for deployment through Heroku: 

https://zayin.herokuapp.com/


## **Division of Labor**

Foram Patel

* Drew API Flow Chart
* Login Page
* Dashboard
* Server Set Up
* Wrote milestone2.md
* Added Button Navigation

Tengfei Louie

* Drew API Flow Chart
* Navigation Bar
* Account Settings
* Confirmation Page
* Server Set Up
* Wrote milestone2.md
* Added Button Navigation

Vivienne Tam

* Drew API Flow Chart
* Wrote milestone2.md
* Sign up page
* Friends list page
* Movie list page
* Added Button Navigation

