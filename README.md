# Full Stack Project

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

_**Food-Swipe** is an app that lets a user signup and login and then wiew pictures of foods. The user will be able to like or disliike foods (pmvp: swiping the photos of food). The user will then be able too view like and the links to the restaurants that have the food liked or disliked._

<br>

## MVP

The **Food-Swipe** MVP is to create a functional app on the user side. The user will be able to see the app on a basic level. The user will be able to see foods that belong to restaurants and unlike other food apps it will be based on food items as opposed to the actual restaurant.

<br>

### MVP Goals

- _Authentication_
- _An API that will provide the data needed for the app_
- _A Full CRUD backend_
- _React Native front end/ React Js_
- _Seed data for about 10+ food items, and about 5 restaurants_


<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      Ruby on Rails       | Backend database, api._ |
|   React Native   | _Mobile front end._ |
| React (if React Native is not approved) | _A library to create the front end._ |
|     reactjs-popup      | _a Library that will allwo me to create pop up components._ |
|     Axios     | _Retrieve data from API._ |


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
| App                |   No             | The main component of the app and will create routes.                                                    |
| SignUp             | Form            | Will add the user to its unique table.                               |
| Login             | Form          | Will let the user enter the app with its unigue table.                                               |
| Header           | No                | Will hold logo.                                               |
| Player Symbol          |    No      | Will redirect to profile page |
| User Home Page   | Yes | User picks will view photos and have option to route to different user options.                                           |
| Food Overlay Page               |     Yes       | Popup of item overlay (pmvp).           |
| Likes |           Yes      | Displays list of liked foods.  |
| Edit Profile          |    Yes             | Alows user to edit information                 |
| Resaurant          |       Yes          | Shows restaurants profile  (pmvp)               |
| Menu          |           Yes      | Shows restaurant's menu (pmvp)                 |

<br>

### MVP Server (Back End)

#### ERD Model
<img src="https://i.imgur.com/bUTMxTO.png" alt="ERD">


#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

|Controller|Operation|VERB  |Route        |
|----------|---------|------|-------------|
|User      |View  |GET  |/users       |
|User      |view    |GET   |/users/:user_id    |
|User      |create  |POST  |/users        |
|User      |update  |PUT   |/users/:user_id    |
|User      |delete  |DELETE|/users/:user_id    |
|Restaurant      |View  |GET  |/Restaurants       |
|Restaurant      |view    |GET   |/Restaurants/:Restaurants    |
|Restaurant      |create  |POST  |/Restaurants        |
|Restaurant      |update  |PUT   |/Restaurants/:Restaurants_id    |
|Restauant      |delete  |DELETE|/Restaurants/:Restaurants_id    |
|Food      |View  |GET  |/users      |
|Food      |view    |GET   |/users/:user_id    |
|Food      |create  |POST  |/users        |
|Food      |update  |PUT   |/users/:user_id    |
|Food      |delete  |DELETE|/users/:user_id    |

<br>

***

## Planning

After I am approved, I will start my backend. My goal is to have full CRUD and User autnetication by monday afternoon. I will then start my front end and will aim to have the logic done my Wednesday night, so I can focus on css and some post mvp features  on thursday.

<br>

### Timeframes


| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
|  Models        |    H     |     3 hrs      |          |
| Seed Data           |    H     |     4 hrs      |         |
| CRUD Routes  |    H     |     6 hrs      |          |
|  User Authentication  |    H     |     7 hrs      |          |
| Front-end Authentication |    H     |     10 hrs      |         |
| Header and Profile Button   |    M     |     2 hrs      |         |
| Home Page  |    H     |     10 hrs      |          |
| Edit Page  |    H     |     7 hrs      |         |
| CSS  |    M     |     10 hrs      |         |
| TOTAL               |          |     59 hrs      |       |





<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions



***