# Food-Swipe

- [Food-Swipe](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Team Members](#Team-Members)
    - [Team Expectations](#Team-Expectations)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Food-Swipe** is a tinder-esque application that aids the user in finding nearby food. The user will like or dislike food items adding them to a list showing liked foods belonging to their respective resteraunts._

<br>

## MVP

The **Food-Swipe** MVP is to have a deck of food images for the user to like or dislike and have stored in a list based on likes for the user to review. U
ser authentication will allow the user's likes to be persistent._

<br>

### MVP Goals

- _Authentication_
- _Full CRUD backend_
- _Working food deck with ability to like or dislike items._
- _User ability review liked foods._
- _Seed data for about 10+ food items, and about 5 restaurants_


<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  Ruby on Rails   | _Backend: database, api, authentication, and authorization_ |
|   React Native   | _Neccesary for Mobile Development_ |
|     React        | _Required for native_ |
|React-Native-Modals| _a Library to create pop up components in native._ |
|     Axios        | _Retrieve data from API._ |


<br>

### MVP Client (Front End) (unless I am approved for React Native, which is also for the Front end, but mobile based

#### Wireframes

####  MVP
<img src="https://i.imgur.com/YYNxq80.png" alt="Food-Swipe">


#### Post MVP
<img src="https://i.imgur.com/dL5h2h2.png" alt="Food-Swipe">

#### Post Post MVP
<img src="https://i.imgur.com/32QIauv.png" alt="Food-Swipe">

#### Component Hierarchy

<img src="https://i.imgur.com/2JK8cpF.png">

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

| Component          | State               | Description                                                                        |
|--------------------|---------------------|------------------------------------------------------------------------------------|
| App                |   No             | The root of the application. Contains a StackNavigator to allow for routing between views.|
| SignUp             | Form            | Allow user create a unique account in the user table.                               |
| Login             | Form          | Allow user to log in to existing account.|
| Header           | No                | Shared component containg |
| Player Symbol          |    No      | Will redirect to profile page |
| User Home Page   | Yes | User picks will view photos and have option to route to different user options.|
| Food Overlay Page               |     Yes       | Popup of item overlay (pmvp).           |
| Likes |           Yes      | Displays list of liked foods.  |
| Edit Profile          |    Yes             | Alows user to edit information                 |
| Resaurant          |       Yes          | Shows restaurants profile  (pmvp)               |
| Menu          |           Yes      | Shows restaurant's menu (pmvp)                 |

<br>

### MVP Server (Back End)

#### ERD Model
<img src="https://i.ibb.co/RYmnjcK/Untitled-Diagram.jpg" alt="ERD">

<!-- User has_many foods
User has_many Reviews
Foods has_many Reviews
Foods belongs_to User
Foods belongs_to Restaurant
Foods belongs_to Restaurant
Restaurant has_many foods -->

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

|Controller|Operation|VERB  |Route        |
|----------|---------|------|-------------|
|User      |index  |GET  |/users       |
|User      |view    |GET   |/users/:user_id    |
|User      |create  |POST  |/users        |
|User      |update  |PUT   |/users/:user_id    |
|User      |delete  |DELETE|/users/:user_id    |
|Restaurant|index   |GET   |/Restaurants       |
|Restaurant|view    |GET   |/Restaurants/:Restaurants    |
|Restaurant|create  |POST  |/Restaurants        |
|Restaurant|update  |PUT   |/Restaurants/:Restaurants_id    |
|Restauant |delete  |DELETE|/Restaurants/:Restaurants_id    |
|Food      |index   |GET   |/foods/:user_id    |
|Food      |view    |GET   |/foods/:food_id    |
|Food      |create  |POST  |/foods             |
|Food      |update  |PUT   |/foods/:food_id|
|Food      |delete  |DELETE|/foods/:food_id    |

<br>

***

## Planning

After I am approved, I will start my backend. My goal is to have full CRUD and User autnetication by monday afternoon. I will then start my front end and will aim to have the logic done my Wednesday night, so I can focus on css and some post mvp features  on thursday.

<br>

### Timeframes


| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
|  Models        |    H     |     3 hrs      |    2 hrs      |
| Seed Data           |    H     |     4 hrs      |   1 hr     |
| CRUD Routes  |    H     |     6 hrs      |     3 hrs     |
|  User Authentication  |    H     |     7 hrs      |    1 hr      |
| Front-end Authentication |    H     |     10 hrs      |         |
| Header and Profile Button   |    M     |     4 hrs      |         |
| Home Page  |    H     |     10 hrs      |     3 hrs    |
| Likes Page  |    H     |     4 hrs      |    1 hr      |
| Edit Page  |    H     |     7 hrs      |         |
| CSS  |    M     |     10 hrs      |     2.75 hrs    |
| TOTAL               |          |     65 hrs      |    7 hrs 50 min   |





<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | Created mock-ups                          |
|Mar 5th | Put togeth pitch                          |
|Mar 6th | Get approved and start backend with rails |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th|  OFF (Jewish Holiday)                    |
|Mar 11th|  MVP, begin post-MVP                                  |
|Mar 12th| post-MVP                                |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

- Restaurant signup and login
- Dislikes: List of disliked foods
- Reviews: Write reviews and view reviews
- Swipe: The ability to swipe
- Popup: The pop up when clicked on home page food

<br>

***

## Project Change Log

I already had to change my wireframes, ERD, and Hierarchy

## Code Showcase

This is the code to pull user location, and will automaticallyy ask user to allow app to retrieve user location. (prety cool in my opinion)

  function getLocation() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            let crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            compareLocations(pos)
        }

## Code Issues & Resolutions



***