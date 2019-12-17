# React Spotify API

Single-page application written in ReactJS to harness the Spotify API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App structure

The app uses React hooks to hold state and effects.

Props are passed between components through the router, built with react-router-dom.

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Album.jsx
│   │   ├── Album.scss
│   │   ├── Artist.jsx
│   │   ├── Artist.scss
│   │   └── Router.jsx
│   ├── views
│   │   ├── Albums.jsx
│   │   ├── ArtistSearch.jsx
│   │   ├── ArtistSearch.scss
│   │   ├── Login.jsx
│   │   └── Login.scss
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── history.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── README.md
├── config.json
├── package-lock.json
├── package.json
├── pbcopy
└── server.js
```

## Installation

1. Setup a Spotify account and [register an application](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app);

2. Clone this repository;

3. Create a file at the root called `config.json` containing 3 information: *client_id*, *client_secret* and *redirect_uri*. 

This file is ignored in commits to the repository, and without it the app won't work.

It should look like this:

```json
{
  "client_id": "94cf43fb07ab3ds8a5c8891eadc461a1",
  "client_secret": "4d6aeac027254230b773e41p353bbdc1",
  "redirect_uri": "http://localhost:8888/callback"
}
```

Use the *client_id* and *client_secret* from the app you created in your Spotify account.

Keep the *redirect_api* as shown above.

4. Install dependencies:

```sh
npm i
```

5. Initiate the server:

```sh
node server.js
```

6. Start the app:

```sh
npm start
```

7. A browser should open with the app. If not, open one and navigate to http://localhost:3000.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

