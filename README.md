# Tabula: SEAS course-recommendation engine

> [**React Static Boilerplate**](https:www.tabula.life) is built upon [**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate), 
> a template which demonstrates how to use component-based UI development approach with best of breed
> technologies including [React](http://facebook.github.io/react/), [Redux](http://redux.js.org/),
> [Babel](http://babeljs.io/), [Webpack](https://webpack.github.io/), [Browsersync](https://browsersync.io/),
> [React Hot Loader](http://gaearon.github.io/react-hot-loader/) and more.

### Getting up to speed

We highly recommend reading 

* https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d#.i818ofeqo and https://github.com/kriasoft/react-static-boilerplate/blob/master/docs/routing-and-navigation.md to get up to speed on routing
* http://bulma.io/documentation/overview/start/ to get a feel for what the CSS framework we're using offers
* https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/ to understand how we're utilizing Cloudflare to get free SSL hosting with a custom domain
* Following Dan Abramov's advice and learning React itself, then npm, JS bundlers, ES6, routing, flux in order.
* Reading the Webpack documentation https://webpack.js.org/concepts/ if you're unfamiliar with it. 

### Directory Layout

```shell
.
├── /components/                # Shared or generic UI components
│   ├── /Button/                # Button component
│   ├── /Layout/                # Website layout component
│   ├── /Link  /                # Link component to be used insted of <a>
│   └── /...                    # etc.
├── /core/                      # Core framework
│   ├── /history.js             # Handles client-side navigation
│   ├── /router.js              # Handles routing and data fetching
│   └── /store.js               # Application state manager (Redux)
├── /node_modules/              # 3rd-party libraries and utilities
├── /pages/                     # React components for web pages
│   ├── /about/                 # About page
│   ├── /error/                 # Error page
│   ├── /home/                  # Home page
│   └── /...                    # etc.
├── /public/                    # Static files such as favicon.ico etc.
│   ├── /dist/                  # The folder for compiled output
│   ├── favicon.ico             # Application icon to be displayed in bookmarks
│   ├── robots.txt              # Instructions for search engine crawlers
│   └── /...                    # etc.
├── /test/                      # Unit and integration tests
├── /utils/                     # Utility and helper classes
│── main.js                     # React application entry point
│── package.json                # The list of project dependencies and NPM scripts
│── routes.json                 # This list of application routes
│── run.js                      # Build automation script, e.g. `node run build`
└── webpack.config.js           # Bundling and optimization settings for Webpack
```


### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your
machine.

**Step 2**. Compile and launch your app by running:

```shell
$ node run                      # Same as `npm start` or `node run start`
```

You can also test your app in release (production) mode by running `node run start --release` or
with HMR and React Hot Loader disabled by running `node run start --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).


### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ npm run lint                  # Check JavaScript and CSS code for potential issues
$ npm run test                  # Run unit tests. Or, `npm run test:watch`
```


### How to Deploy

```shell
$ node run publish              # Build and publish the website to your gh-pages branch, same as `npm run publish`
```

If you need just to build the project without publishing it, run:

```shell
$ node run build                # Or, `node run build --release` for production build
```
