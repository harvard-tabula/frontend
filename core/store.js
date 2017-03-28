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
import { fetchProfile } from '../actions/user'

const initialState = { 
  profile: {
    "avatar": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
    "concentration": null,
    "email": "jessicawang@college.harvard.edu",
    "ethnicity": null,
    "gender": null,
    "name": "Jessica Wang",
    "tags": [],
    "year": null,
    "years_coding": null
  },
  tags: [
    {id:0, text:'Coding', success: false, category: "academic"}, 
    {id:1, text:'Algorithms', success: false, category: "academic"},
    {id:2, text:'Data Structures', success: false, category: "academic"},
    {id:3, text:'Machine Learning & Artifical Intelligence', success: false, category: "academic"},
    {id:4, text:'Computer Graphics', success: false, category: "academic"},
    {id:5, text:'Robotics', success: false, category: "academic"},
    {id:6, text:'Computer Security', success: false, category: "academic"},
    {id:7, text:'Computer Architecture', success: false, category: "academic"},
    {id:8, text:'Programming Languages', success: false, category: "academic"},
    {id:9, text:'Computational Biology', success: false, category: "academic"},
    {id:10, text:'Software Engineer', success: false, category: "professional"}, 
    {id:11, text:'Project/Product Manager', success: false, category: "professional"},
    {id:12, text:'Design', success: false, category: "professional"},
    {id:13, text:'Backend', success: false, category: "professional"},
    {id:14, text:'Frontend', success: false, category: "professional"},
    {id:15, text:'Security', success: false, category: "professional"},
    {id:16, text:'Mobile', success: false, category: "professional"},
    {id:17, text:'Hardware', success: false, category: "professional"},
    {id:18, text:'Databases', success: false, category: "professional"},
    {id:19, text:'Networks', success: false, category: "professional"},
    {id:20, text:'Finance', success: false, category: "professional"},
    {id:24, text:'Code a website', success: false, category: "milestone"}, 
    {id:21, text:'Wrote Mathematical Proof', success: false, category: "milestone"},
    {id:22, text:'Code a for loop', success: false, category: "milestone"},
    {id:23, text:'Coded an algorithm', success: false, category: "milestone"},
    {id:25, text:'Python', success: false, category: "language"}, 
    {id:31, text:'C', success: false, category: "language"},
    {id:32, text:'C++', success: false, category: "language"},
    {id:33, text:'R', success: false, category: "language"},
    {id:34, text:'Haskell', success: false, category: "language"},
    {id:35, text:'JAVA', success: false, category: "language"},
    {id:36, text:'Javascript', success: false, category: "language"},
    {id:37, text:'CSS', success: false, category: "language"}
  ],
  tagCategories: [
    {id:1, title: "Academic Interests", categoryTitle: "academic"},
    {id:2, title: "Professional Interests", categoryTitle: "professional"},
    {id:3, title: "Milestones", categoryTitle: "milestone"},
    {id:4, title: "Languages", categoryTitle: "language"}
  ]
};

const loggerMiddleware = createLogger();

// const store = createStore(
//   userApp,
//   applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
//   )
// )

// store.dispatch(fetchProfile()).then(() =>
//   console.log(store.getState())
// )

const store = createStore (userApp, initialState)
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState());
});

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
