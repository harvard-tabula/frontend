# React Static Boilerplate

> [**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate) (RSB) is an
> opinionated boilerplate and tooling for creating modern stand-alone web applications (aka
> [SPA](https://en.wikipedia.org/wiki/Single-page_application)s) for a serverless architecture. RSB
> significantly reduces cost by eliminating the need for servers such as EC2 instances because the
> entire site can be hosted directly from CDN ([Firebase](https://www.firebase.com/), [GitHub
> Pages](https://pages.github.com/), [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html),
> or other similar cloud storage). Sites built with RSB cab be fully functional with REST API or
> GraphQL calls to micro-services such as [Amazon Lambda](https://aws.amazon.com/lambda/),
> [Azure Functions](https://azure.microsoft.com/services/functions/), or dynamic Docker endpoints
> hosted on [DigitalOcean](https://www.digitalocean.com/?refcode=eef302dbae9f&utm_source=github&utm_medium=oss_sponsorships&utm_campaign=opencollective).
> RSB demonstrates how to use component-based UI development approach with best of breed
> technologies including [React](http://facebook.github.io/react/), [Redux](http://redux.js.org/),
> [Babel](http://babeljs.io/), [Webpack](https://webpack.github.io/), [Browsersync](https://browsersync.io/),
> [React Hot Loader](http://gaearon.github.io/react-hot-loader/) and more.

### Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax ([ES2015](http://babeljs.io/docs/learn-es2015/)+) via [Babel](http://babeljs.io/), modern CSS syntax via [PostCSS](https://github.com/postcss/postcss)<br>
&nbsp; &nbsp; ✓ Component-based UI architecture via [React](http://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)<br>
&nbsp; &nbsp; ✓ Application state management /w time-travel debugging via [Redux](http://redux.js.org/) (see [`main.js`](main.js), [`core/store.js`](core/store.js))<br>
&nbsp; &nbsp; ✓ Routing and navigation via [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) and [`history`](https://github.com/mjackson/history) (see [`main.js`](main.js), [`core/router.js`](core/router.js), [`utils/routes-loader.js`](utils/routes-loader.js))<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading via [Webpack](https://webpack.github.io/) and [ES6 System.import()](http://www.2ality.com/2014/09/es6-modules-final.html)<br>
&nbsp; &nbsp; ✓ Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Cross-device testing with [Browsersync](https://browsersync.io/) (see [`run.js#start`](run.js))<br>
&nbsp; &nbsp; ✓ **24/7** community support on [Gitter](https://gitter.im/kriasoft/react-static-boilerplate); customization requests on [Codementor](https://www.codementor.io/koistya)<br>


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
$ node run publish              # Build and publish the website to Firebase, same as `npm run publish`
```

If you need just to build the project without publishing it, run:

```shell
$ node run build                # Or, `node run build --release` for production build
```
