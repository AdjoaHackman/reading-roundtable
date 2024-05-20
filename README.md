# Reading-Roundtable

![readingroundtable](https://img.shields.io/badge/Reading-Roundtable-red)

[The Result!](https://reading-roundtable-a1d1097f86e5.herokuapp.com/)

## Description TODO

An Express.js web app that can search for books from the Google Books API and uses login sessions.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [TODO](#todo)


## Installation

1. `npm install`
2. `mysql -u root -p` followed by your MySQL password
3. `source ./db/schema.sql` then `quit` out of mysql
4. `npm run seeds`
5. `npm start`


## Usage TODO?

1. Login
2. Search!

## Credits

- [Tal BenDavid](https://github.com/talbdbd)
- [Nicole Kim](https://github.com/nicolehekim)
- [Adjoa Hackman](https://github.com/AdjoaHackman)
- [Lauren Elisiario](https://github.com/lelisiario)
- [Adam Hussain](https://github.com/adamh1223)
- [Alfred Wallace](https://github.com/alfwall)
---
- [Google Books API](https://developers.google.com/books)


## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Features

- Search for books through the Google Books API
- Create an account to build a personal library


## User Story

As a user,\
\
I should be able to create an account, \
login, \
add books to my list of “read”, \
see lists of other users who publicly share or are friends with me, \
and be able to discover new books based on what I have already added to my list.


## Acceptance Criteria
GIVEN a website with book information and log-in widget on the side...

WHEN I search book titles/authors,\
THEN I am presented with a list of titles similar to my search query with an “Add On” button.

WHEN I click on the “Add On” button,\
THEN I am presented with a login/sign-up popup.

WHEN I enter my information with email/password requirement,\
THEN I am logged in with my unique information.

WHEN I am logged in, \
THEN I should be able to see my list, search for new titles, rate titles and leave reviews.


## TODO

### Minimum Requirements
- [x] Use Node.js and Express.js to create a RESTful API.
- [x] Use Handlebars.js as the templating engine.
- [x] Use MySQL and the Sequelize ORM for the database.
- [x] Have both GET and POST routes for retrieving and adding new data.
- [x] Be deployed using Heroku (with data).
- [x] Use at least one new library, package, or technology that we haven’t discussed.
- [x] Have a polished UI.
- [x] Be responsive.
- [x] Be interactive (i.e., accept and respond to user input).
- [x] Have a folder structure that meets the MVC paradigm.
- [x] Include authentication (express-session and cookies).
- [x] Protect API keys and sensitive information with environment variables.
- [x] Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- [x] Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
- [x] Update your Module 2 portfolio websites with a link to the app.

### Future Plans
- [ ] Keep a list of books for each user
- [ ] View that list
- [ ] Delete from that list