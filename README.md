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

_**Food-Swipe** Having an app that lets a user signup and login and then wiew pictures of foods. The user will be able to like or disliike foods (pmvp: swiping the photos of food). The user will then be able too view like and the links to the restaurants that have the food liked or disliked._

<br>

## MVP

_The **Food-Swipe** MVP is to create a functional app on the user side. The user will be able to see the app on a basic level. The user will be able to see foods that belong to restaurants and unlike other food apps it will be based on food items as opposed to the actual restaurant.

<br>

### MVP Goals

- _Authentication_
- _An API that will provide the data needed for the app_
- _A Full CRUD backend_
- _React Native front end/ React Js_
- _Seed data for about 10+ food items, and about 5 restaurants_


<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      Ruby on Rails       | Backend database, api._ |
|   React Native   | _Mobile front end._ |
| React (if React Native is not approved) | _A library to create the front end._ |
|     reactjs-popup      | _a Library that will allwo me to create pop up components._ |


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
| App                |                 | The main component of the app.                                                    |
| SignUp             | Form            | Will add the user to its unique table.                               |
| Login             | Form          | Will let the user enter the app with its unigue table.                                               |
| Header           | N/A                | Will hold logo.                                               |
| Player Symbol          |          | Will redirect to profile page |
| User Home Page   | Selected Categories | User picks categories for the questions.                                           |
| Food Overlay Page               |            | Popup of item overlay (pmvp).           |
| Likes |                 | Displays list of liked foods.  |
| Edit Profile          |                 | Alows user to edit information                 |
| Resaurant          |                 | Shows restaurants profile  (pmvp)               |
| Menu          |                 | Shows restaurant's menu (pmvp)                 |

<br>

### MVP Server (Back End)

#### ERD Model
<img src="https://i.imgur.com/bUTMxTO.png" alt="ERD">


#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/users/:id`
	- Show route for a user requested by ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/nominate`
  - Update a user by id to create an association to the ballots table

<br>

***

## Planning

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

<br>

### Timeframes

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

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

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

<br>

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

***