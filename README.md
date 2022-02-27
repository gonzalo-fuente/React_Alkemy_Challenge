# React Alkemy Challenge

## Hotel Menu App

Application to create a restaurant hotel menu that will show different attributes at item level and also at menu level.

## Live demo

[Link to the site!](https://la-cuisine-de-ma-grand-mere.netlify.app/)

## Use cases

1. Login Form

The form should be rendered on any route if the user is not authenticated
Form fields:

- E-mail.
- Password.
- "Log in" button.

When submitting, there will be a non empty validation in both fields. If succeeded, a POST request must be made with the email and password fields in the BODY.
The valid data to get a token are:

- Email: challenge@alkemy.org
- Password: react

Some kind of feedback should be shown to the user while the request is being processed, not allowing it to press the login button again until it receives a response.
In the case of getting an API error, an alert should be displayed (using sweet alert).
If succeeded, it should redirect to Home and store the obtained token in localStorage.

2. Menu Items

The Home page will show the menu items in a list. Each item (which must be a separate component) will contain:

- Name of the dish.
- Image.
- Characteristics of the plate.
- Actions to see more details or remove it from the menu.

3. Recipes Finder

To add a menu item to the menu, a form must be displayed that makes a GET request to the search endpoint and display the available results in a grid, using the item component from the previous point.
The form should search only if there are more than 2 characters in the filter. Validation must be done using the Formik library.

4. Recipe Detail

Clicking on a menu item will display the details of the recipe.

5. Navigation between sections

The different pages must be protected against unauthorized users by verifying that the current user has a token stored in localStorage. For route management, ReactRouterDom should be used.

## Required to run the app

- Node.js v16.14.0
- NPM v8.3.1
- Axios v0.26.0
- Bootstrap v5.1.3
- Formik v2.2.9
- Html-react-parser v1.4.8
- React v17.0.2
- React-redux v7.2.6
- React-router-dom v6.2.1
- Redux v4.1.2
- Redux-thunk v2.4.1
- Sweetalert v2.1.2
- Yup 0.32.11

## How to run the App manually

Go to the project root directory, and in the terminal run...

### `npm install`

### `npm start` - runs the server on http://localhost:3000
