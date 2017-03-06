/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';
import userApp from '../reducers/user/' 

const initialState = { 
  	academicInterests: [{id:0, text:'Coding', success: false, className:'tag is-medium'}, 
  				{id:1, text:'Algorithms', success: false, className:'tag is-medium'},
  				{id:2, text:'Data Structures', success: false, className:'tag is-medium'},
  				{id:3, text:'Machine Learning & Artifical Intelligence', success: false, className:'tag is-medium'},
  				{id:4, text:'Computer Graphics', success: false, className:'tag is-medium'},
  				{id:5, text:'Robotics', success: false, className:'tag is-medium'},
  				{id:6, text:'Computer Security', success: false, className:'tag is-medium'},
  				{id:7, text:'Computer Architecture', success: false, className:'tag is-medium'},
  				{id:8, text:'Programming Languages', success: false, className:'tag is-medium'},
  				{id:9, text:'Computational Biology', success: false, className:'tag is-medium'}],
  	professionalInterests: [{id:0, text:'Software Engineer', success: false, className:'tag is-medium'}, 
  				{id:1, text:'Project/Product Manager', success: false, className:'tag is-medium'},
  				{id:2, text:'Design', success: false, className:'tag is-medium'},
  				{id:3, text:'Backend', success: false, className:'tag is-medium'},
  				{id:4, text:'Frontend', success: false, className:'tag is-medium'},
  				{id:5, text:'Security', success: false, className:'tag is-medium'},
  				{id:6, text:'Mobile', success: false, className:'tag is-medium'},
  				{id:7, text:'Hardware', success: false, className:'tag is-medium'},
  				{id:8, text:'Databases', success: false, className:'tag is-medium'},
  				{id:9, text:'Networks', success: false, className:'tag is-medium'},
  				{id:10, text:'Finance', success: false, className:'tag is-medium'}],
  	milestones: [{id:0, text:'Code a website', success: false, className:'tag is-medium'}, 
  				{id:1, text:'Wrote Mathematical Proof', success: false, className:'tag is-medium'},
  				{id:2, text:'Code a for loop', success: false, className:'tag is-medium'},
  				{id:3, text:'Coded an algorithm', success: false, className:'tag is-medium'}],
  	languages: [{id:0, text:'Python', success: false, className:'tag is-medium'}, 
  				{id:1, text:'C', success: false, className:'tag is-medium'},
  				{id:2, text:'C++', success: false, className:'tag is-medium'},
  				{id:3, text:'R', success: false, className:'tag is-medium'},
  				{id:4, text:'Haskell', success: false, className:'tag is-medium'},
  				{id:5, text:'JAVA', success: false, className:'tag is-medium'},
  				{id:6, text:'Javascript', success: false, className:'tag is-medium'},
  				{id:7, text:'CSS', success: false, className:'tag is-medium'}]
};

const store = createStore(userApp, initialState);

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
