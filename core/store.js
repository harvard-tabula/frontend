/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import userApp from '../reducers/user/' 
import { fetchProfileIfNeeded, fetchClassesIfNeeded, fetchTagsIfNeeded,
    fetchSemestersIfNeeded, fetchConcentrationsIfNeeded } from '../actions/user'

const initialState = { 
  tagCategories: [
    {id:1, title: "Academic Interests", categoryTitle: "academic"},
    {id:2, title: "Professional Interests", categoryTitle: "professional"},
    {id:3, title: "Milestones", categoryTitle: "milestone"},
    {id:4, title: "Languages", categoryTitle: "language"}
  ]
};

const loggerMiddleware = createLogger();

const store = createStore(
  userApp,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(fetchProfileIfNeeded())
store.dispatch(fetchClassesIfNeeded())
store.dispatch(fetchTagsIfNeeded())
store.dispatch(fetchSemestersIfNeeded())
store.dispatch(fetchConcentrationsIfNeeded())


// const store = createStore (userApp, initialState)
// console.log(store.getState())

// store.subscribe(() => {
//   console.log(store.getState());
// });

// // Centralized application state
// // For more information visit http://redux.js.org/
// const store = createStore((state, action) => {
//   // TODO: Add action handlers (aka "reduces")
//   switch (action) {
//     case 'COUNT':
//       return { ...state, count: (state.count || 0) + 1 };
//     default:
//       return state;
//   }
// });

export default store;
