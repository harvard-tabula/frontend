# Tabula: SEAS course-recommendation engine

> [**Tabula's frontend**](https://www.tabula.life) is built upon [**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate), 
> a template which demonstrates how to use component-based UI development approach with best of breed
> technologies including [React](http://facebook.github.io/react/), [Redux](http://redux.js.org/),
> [Babel](http://babeljs.io/), [Webpack](https://webpack.github.io/), [Browsersync](https://browsersync.io/),
> [React Hot Loader](http://gaearon.github.io/react-hot-loader/) and more.

### Getting up to speed

* Read the [boilerplate's routing guide](https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d#.i818ofeqo) and [the justification for using it](https://github.com/kriasoft/react-static-boilerplate/blob/master/docs/routing-and-navigation.md) to get up to speed on routing
* Go through the documentation for [Redux](http://redux.js.org/docs/introduction/), [Webpack](https://webpack.js.org/concepts/), [redux-thunk](https://github.com/gaearon/redux-thunk), and [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
* Check out [Bulma's documentation](http://bulma.io/documentation/overview/start/) to get a feel for what the CSS framework we're using offers
* Read [Cloudlflare's guide](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) to getting free SSL hosting with a custom domain hosted on `gh-pages`.
* Brush up on CORS from a [frontend](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) and [backend](https://medium.com/statuscode/cors-a-guided-tour-4e72230a8739) perspective.

### Getting Started, Running Locally

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your
machine.

**Step 2**. Install dependencies:

```shell
$ npm install
```

**Step 2**. Compile and launch your app by running:

```shell
$ node run                      # Same as `npm start` or `node run start`
```

You can also test your app in release (production) mode by running `node run start --release` or
with HMR and React Hot Loader disabled by running `node run start --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).

### How to Test

The unit tests (which do not yet exist) are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

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
