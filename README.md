# Gumroad Star Ratings

A MERN fullstack application for Star Ratings.

You can view the [Live App](https://gumroad-rating.netlify.app/).


## Features ⭐


⚡️ Includes Half Star and Full Star Ratings\
⚡️ Includes MongoDB Operations\
⚡️ RESTful API for submitting and accessing reviews\
⚡️ Modern UI Design


## Folder Structure :file_folder:
```
App
├── client
├── server

```

```
client
├── public
│   └── index.html
├── src
│   └── Components
│   |     └── HomePage
│   |     └── NoMatch
│   |     └── Rating
│   |     └── RatingOverlay
│   └── Constants
│   |     └── homepage.json
│   |     └── ratingOverlay.json
│   └── App.js
│   └── index.js
```
The file `index.js` which executes when our client side application is ran
We have a `components` folder for our different components.

```
server
├── model
│   └── review.js
├── routes
│   └── reviews.js
├── config
│   └── dev.env  
└── app.js
```
In the above folder structure, we have our main file `app.js` which executes when our server side application is ran
We have a `model` folder for our database and a `routes` folder for user and blocks routes.


## Design :triangular_ruler:

We have a collection named `review` in the model folder.
Reviews can be submitted by passing rating and review Text in the Request Body obtained from the client side.

`POST` - /new
For submitting new Reviews and ratings

`GET`  - /
For fetching all the reviews and ratings <br />

On the react side, we have created different components such as HomePage, Rating Overlay for Rating Page, NoMatch for 404 Page, and the Rating Components which allows us to establish the 5-star Ratings.
In the react we have used `React Hooks` such as `useState`, `useEffect`.
`React Router` incuded to handle the different routes.

## Technologies used 🛠️

- [Node](https://nodejs.org/en/) - JavaScript Runtime
- [React](https://reactjs.org/) - JavaScript Library
- [Express](https://expressjs.com/) - Node.js Framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Deployment 📦

I used [heroku](https://dashboard.heroku.com/apps) to deploy API's and [netlify](https://www.netlify.com/) to host the react app
