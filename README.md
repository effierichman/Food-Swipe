# Project 4

![final countdown](https://media0.giphy.com/media/RnX4q6yYDoYCI/200.gif)

**One. More. Project.**

## Table of Contents <!-- omit in toc -->
- [Project 4](#Project-4)
  - [Overview](#Overview)
  - [The MVP Requirements](#The-MVP-Requirements)
    - [Planning](#Planning)
    - [Server (Back End)](#Server-Back-End)
    - [Client (Front End)](#Client-Front-End)
    - [Styling](#Styling)
    - [Linting](#Linting)
    - [Deployment](#Deployment)
    - [Procedural](#Procedural)
- [Getting Started](#Getting-Started)
  - [Step 1. Make A New Repo](#Step-1-Make-A-New-Repo)
  - [Step 2. Pitch Your Idea](#Step-2-Pitch-Your-Idea)
  - [Step 3. Get Hacking](#STEP-3-Get-Hacking)
    - [Getting Support](#Getting-Support)
- [Resources](#Resources)
  - [Templates](#Templates)
  - [Wireframing](#Wireframing)
  - [ERD Modeling](#ERD-Modeling)
- [Plagiarism](#Plagiarism)

## Overview

For your final project, you will build a full-stack, full-CRUD app, utilizing a RESTful JSON API on the back-end, with React on the front end.

This project, like the others, will be a portfolio piece. As it is your final project here at GA, it will be the piece you are likely to showcase the most. Build something you can be proud of! Something that demonstrates an understanding of, and your ability to use, the tools and techniques introduced over the last 3 months. It must be **functional** with **sufficient complexity**.

_No tricks or hidden challenges this time. You are reals dev now._

#### Two Quick Notes: <!-- omit in toc -->

1. While we have sometimes in previous units been lenient on various project requirements, once your pitch is approved, _the requirements for this project are non-negotiable_. If you do not meet these requirements by the deadline, consultation with Student Services about your graduation status may become neccessary.

1. If you have an idea that utilizes an alternate tech stack, or requires adjustment of the listed MVP requirements, we are willing to hear you out during the project pitch. If you decide to take this approach, you will also need to bring a back up project (in the event that we do not approve your first proposal).

#### So, this is what 3 months of grueling work has come to... <!-- omit in toc -->

<br>

## MVP Requirements

### Planning

- Have a **thoroughly** developed `README.md` file. (Refer below to _"Pitch Your Project Idea"_ for more.)

### Server (Back End)

- Have a **RESTful JSON API**.
  - Build out a server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
    - 1 user table
    - 2 other tables, of your choosing
    - There must be at least one association. (1:m _or_ m:m)
  - Utilize **Rails** or **Express** to define models for interacting with your database.
  - Implement User Authentication.
  - Implement working generic controller actions for full-CRUD (`index`, `show`, `create`, `update`, `delete`) between all tables.

### Client (Front End)

- Have a working, interactive **React** app, built using `create react app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your backend API, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.

_^ Unless it makes sense for that information to be restricted to particular users._

### Styling

- Be styled with CSS (or SCSS, if you'd prefer).
- Implement responsive design on at least 2 screen sizes (including desktop) using media queries (tablet, mobile, portrait or landscape).

### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` conventions.
- Remove unnecessary boilerplate files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment

- Deploy the fully functional front-end.
- Deploy the fully functional back-end.

### Procedural

- Initialize a **git repo on Github Enterprise**, with a link to your hosted project.
- Have **frequent commits**, making a _robust_ commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

# Getting Started

## Step 1. Make A New Repo

You will start by creating your project repository on GitHub Enterprise.

## Step 2. Pitch Your Idea

Before you start coding away, you will meet with instructors to get your idea approved. You will have 5 minute pitches in which you will present your ideas. You must have your idea **FULLY** prepared and written up in the repository's ReadMe file, including all of the following items, to get approved.

<!-- (Frankly, we'll just be mad if you walk into the pitch without a thorough, organized `README.md`. You have a template available. Clone the template, don't leave any of the template boilerplate in your own README, and use that to pitch us.) -->

1. **Title:** A working title for your app.
2. **Overview:** A brief explanation, in non-technical speak, summarizing the app.
   - **Features:** A full feature list for your MVP app.
   - **Goals:** The overarching goals for your project.
   - **Challenges:** An explanation of the challenges you expect to face with this project.
3. **MVP:** An overview of your MVP, including the minimum, need-to-have features of the app.
   - **Client:** Mid-fi wireframes, component heirarchy, component breakdown, and timeframe estimates.^^
   - **Server:** Data architecture, ERD model, and API endpoint documentation.^^
   - **Dependencies:** A full list of all libraries, frameworks, etc.
4. **Post-MVP:** Your goals for post-MVP, including features that you would like to implement once your MVP is complete.

^^ **No more hand-drawn wireframes or ERD models.** There are heaps of free services that can create great wireframes and ERD models. Refer to the Resources section below for templates, services, and other README resources.

## Step 3. Get Hacking

### Getting Support

When you experience issues with your code, once again, you will need to use the GitHub Issues tab. The Issue Ticket templates help you observe, research, and attempt to resolve your issue. If there's still no resolution, submit and slack the issue ticket your squad leader to reserve time to troubleshoot together.

<br>

# Resources

## Templates

- [Full Stack Project README Template](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master/project-worksheet.md)
- [Project Issue Ticket Template](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master/template_issue-tickets.md)

## Wireframing

- ["How detailed should wireframes be?"](https://justuxdesign.com/blog/wireframe-fidelity)
- [Wireframe.cc](https://wireframe.cc/)

## ERD Modeling

- [lucidchart](https://www.lucidchart.com/) This is a great tool for building ERDs.
- [draw.io](https://www.draw.io/) Another great tool for ERDs.
- [ERDPlus](https://erdplus.com/) Yet another great tool for ERDS.

# Plagiarism

Reminder: we have a **zero tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://github.com/mishakessler/course-template/blob/master/policy_plagiarism.md).
