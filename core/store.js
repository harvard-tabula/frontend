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
import { markReceivedClasses, markReceivedProfile, fetchTagsIfNeeded,
    fetchSemestersIfNeeded, fetchConcentrationsIfNeeded, fetchLogin } from '../actions/user'

const initialState = { 
  classes: {
    classes: [
        {
            "course": {
                "concentration": "The Modern Middle East",
                "description": "An introduction to Middle Eastern Studies focusing on the modern period (19th and 20th centuries). Lectures will be broadly sequenced according to historical chronology but will be thematically organized. They will provide some historical context for each topic examined, as well as present specific examples through primary sources, visual sources, and numerical data when relevant.This course is designed to give students an overall good grasp of the history of the modern Middle East and of some of the major themes in modern Middle Eastern Studies. Students will critically engage with some of the most important topics that resonate in that area of the world. We will cover topics such as reformism, economic development, colonialism and nationalism, authoritarianism and democratization, sectarianism, culture, gender, literature and the arts, as well as the role of religion in politics. Most of these topics, in one way or another, will speak to the construction of nation-states in the Middle East and to the challenges they have been confronting.This is not a survey course. In particular, it will not be exhaustive in its coverage of the region in space or time, and in its coverage of topics. Students in search of a specific topic, country, or period are strongly encouraged to take a look at the syllabus prior to enrolling to make sure their specific interests will be covered.Assigned readings will consist of primary and secondary sources. Students will be exposed to first-hand accounts by protagonists in the history of the Middle East (primary sources) as well as to the diversity of approaches that the scholarly literature (secondary sources) has taken across disciplines, e.g. anthropological studies, quantitative analysis, philology and textual studies. The larger aim of the course is to develop students&rsquo; critical thinking in dealing with the history, cultures, politics, and political economies of the contemporary Middle East. Required for all concentrators in The Modern Middle East. Open to all undergraduate and graduate students. There are no prerequisites for this course.",
                "harvard_id": 3842,
                "id": 5,
                "name_long": "Introduction to the Modern Middle East",
                "name_short": "MODMDEST 100"
            },
            "course_tags": [{
              "category": "user_history",
              "id": 36,
              "name": "Learning"
            }],
            "grade": "B-",
            "hours": 3.0,
            "id": 1,
            "semester": "Fall 2016"
        },
        {
            "course": {
                "concentration": "Expository Writing",
                "description": "This course inquires into the origin and political and moral nature of the state, into its forms, functions, and connections with the education and the erotic life of its citizens. Readings to be discussed and written on are taken from Plato, Aristotle, Rousseau, Tocqueville, and Marx. Throughout the course, students adjudicate between different conceptions of the state and their ends, and examine the source of power of the state.",
                "harvard_id": 1677,
                "id": 1,
                "name_long": "Philosophy of the State",
                "name_short": "EXPOS 20.133"
            },
            "course_tags": [{
            "category": "user_history",
            "id": 29,
            "name": "Sad"
        }],
            "grade": "A",
            "hours": 6.0,
            "id": 3,
            "semester": "Fall 2016"
        },
        {
            "course": {
                "concentration": "Engineering Sciences",
                "description": "General properties of common biosignals, Bioelectrical (electrophysiological), Biomechanical, Biomagnetic , and Biochemical signals, Bioelectrical acquisition process. Brief discussion of bio-signals obtained from tomography and inverse imaging. Brief introduction to underlying principles of MRI, Ultrasound, CT-Scan, PET, and SPECT, and their associated signals, inverse imaging, ill-posed problems and regularization. Non-transformed and transformed methods for biosignal processing. Structural and Graphical descriptions. Overview of Fourier transforms, Sine and cosine transform, Wavelet transform, Principle Component Analysis, dimension reduction techniques. Blind Source Separation, Representation models based on the statistical independence of the underlying sources, Independent component analysis (ICA), Dependent component analysis, Independent Subspace separation, Pattern Recognition, neural networks, clustering, and genetics algorithms. Applications to Biosignal Processing, and Human computer interaction.",
                "harvard_id": 10585,
                "id": 201,
                "name_long": "Biological Signal Processing",
                "name_short": "ENG-SCI 155"
            },
            "course_tags": [{
            "category": "user_history",
            "id": 26,
            "name": "Angry"
        }],
            "grade": "A",
            "hours": null,
            "id": 4,
            "semester": "Spring 2016"
        },
        {
            "course": {
                "concentration": "Engineering Sciences",
                "description": "Manufacturing new materials is an important component of the world economy as demand ranges from smart phones and processed food to automobiles and airplanes. Rapid changes in the diversity and uses of materials often occur due to technological needs and economic drivers without consideration of environmental and health impacts. This can lead to large scale, global health and contamination problems such as large quantities of plastic waste in oceans, lead exposures from paint in children&rsquo;s toys, and widespread contamination of drinking water in regions exploited for hydraulic fracturing. The class will explore whether it is possible to use the latest advances in science, engineering, and nanotechnology to chart a sustainable material revolution. Guest lecturers from both industry and environmental regulatory agencies will be invited to speak to the class. Course evaluation will be based on in-class participation, presentations and a final project/review paper.",
                "harvard_id": 10588,
                "id": 58,
                "name_long": "Mitigating Toxicity through Better Materials Design",
                "name_short": "ENG-SCI 298R"
            },
            "course_tags": [{
            "category": "user_history",
            "id": 6,
            "name": "Difficult"
        }],
            "grade": "A",
            "hours": null,
            "id": 5,
            "semester": "Spring 2016"
        }
    ]
  },
  tags: {
    tags: [
        {
            "category": "milestone",
            "id": 1,
            "name": "Built a server"
        },
        {
            "category": "academic",
            "id": 2,
            "name": "ML"
        },
        {
            "category": "user_history",
            "id": 4,
            "name": "Neutral"
        },
        {
            "category": "academic",
            "id": 5,
            "name": "Computational Biology"
        },
        {
            "category": "user_history",
            "id": 6,
            "name": "Difficult"
        },
        {
            "category": "milestone",
            "id": 7,
            "name": "Proof-Based Math"
        },
        {
            "category": "academic",
            "id": 8,
            "name": "Algorithms"
        },
        {
            "category": "user_history",
            "id": 9,
            "name": "Love"
        },
        {
            "category": "professional",
            "id": 10,
            "name": "PM"
        },
        {
            "category": "language",
            "id": 11,
            "name": "JAVA"
        },
        {
            "category": "professional",
            "id": 12,
            "name": "Design"
        },
        {
            "category": "milestone",
            "id": 13,
            "name": "Built a mobile app"
        },
        {
            "category": "language",
            "id": 14,
            "name": "Python"
        },
        {
            "category": "language",
            "id": 15,
            "name": "C"
        },
        {
            "category": "user_history",
            "id": 16,
            "name": "Happy"
        },
        {
            "category": "professional",
            "id": 17,
            "name": "DevOps"
        },
        {
            "category": "professional",
            "id": 18,
            "name": "Data Science"
        },
        {
            "category": "academic",
            "id": 19,
            "name": "Programming Languages"
        },
        {
            "category": "language",
            "id": 20,
            "name": "JavaScript"
        },
        {
            "category": "academic",
            "id": 21,
            "name": "Coding"
        },
        {
            "category": "language",
            "id": 22,
            "name": "OCaml"
        },
        {
            "category": "academic",
            "id": 23,
            "name": "Networks"
        },
        {
            "category": "academic",
            "id": 24,
            "name": "Security"
        },
        {
            "category": "language",
            "id": 25,
            "name": "C++ "
        },
        {
            "category": "user_history",
            "id": 26,
            "name": "Angry"
        },
        {
            "category": "academic",
            "id": 27,
            "name": "Robotics"
        },
        {
            "category": "professional",
            "id": 28,
            "name": "Consulting"
        },
        {
            "category": "user_history",
            "id": 29,
            "name": "Sad"
        },
        {
            "category": "academic",
            "id": 30,
            "name": "Computer Networking"
        },
        {
            "category": "milestone",
            "id": 31,
            "name": "Built a web-app"
        },
        {
            "category": "academic",
            "id": 32,
            "name": "Graphics"
        },
        {
            "category": "academic",
            "id": 33,
            "name": "AI"
        },
        {
            "category": "language",
            "id": 34,
            "name": "Haskell"
        },
        {
            "category": "language",
            "id": 35,
            "name": "R"
        },
        {
            "category": "user_history",
            "id": 36,
            "name": "Learning"
        },
        {
            "category": "professional",
            "id": 37,
            "name": "SWE - Frontend"
        },
        {
            "category": "professional",
            "id": 38,
            "name": "Finance"
        },
        {
            "category": "professional",
            "id": 39,
            "name": "SWE - Backend"
        },
        {
            "category": "academic",
            "id": 40,
            "name": "Policy"
        },
        {
            "category": "academic",
            "id": 41,
            "name": "Computer Architecture"
        },
        {
            "category": "milestone",
            "id": 42,
            "name": "Created a model"
        },
        {
            "category": "academic",
            "id": 43,
            "name": "Data Structures"
        }
    ]
  },
  userInfo:{
    tags_categories: [
            {
                "category": "academic",
                "text": "Academic Interests"
            },
            {
                "category": "professional",
                "text": "Professional Interests"
            },
            {
                "category": "milestone",
                "text": "Milestones"
            },
            {
                "category": "language",
                "text": "Languages"
            },
            {
                "category": "user_history",
                "text": "Class Experience"
            }
        ],
    genders: [
            "Female",
            "Other",
            "Male"
        ],
    ethnicities: [
            "Other",
            "Latinx",
            "South Asian",
            "Black",
            "Asian",
            "White"
        ],
    grades: [
            "A",
            "A-",
            "B+",
            "B",
            "B-",
            "C+",
            "C",
            "C-",
            "D+",
            "D",
            "D-",
            "E+",
            "E",
            "SAT",
            "UNSAT",
            "PASS",
            "FAIL",
            "WITHDRAWN"
        ],
    terms: [
            "Fall",
            "Summer",
            "Winter",
            "Spring"
        ]
  },
  profile: {
    profile: {
        "avatar": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
        "concentration": {
            "id": 50,
            "name": "Computer Science"
        },
        "email": "jessicawang@college.harvard.edu",
        "ethnicity": "Asian",
        "gender": "Female",
        "name": "Jessica Wang",
        "tags": [
            {
                "category": "milestone",
                "id": 1,
                "name": "Built a server"
            },
            {
                "category": "academic",
                "id": 5,
                "name": "Computational Biology"
            },
            {
                "category": "academic",
                "id": 8,
                "name": "Algorithms"
            }
        ],
        "year": "2018",
        "years_coding": 2.5
    },
    tag_id: [],
    concentration_id: -1,
    nameSuccess: false,
    emailSuccess: false,
    genderSuccess: false,
    ethnicitySuccess: false,
    concentrationSuccess: false,
    yearsCodingSuccess: false,
    yearSuccess: false
  }
};

const loggerMiddleware = createLogger();

const store = createStore(
  userApp,
  // initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

// store.dispatch(fetchLogin())

// store.dispatch(markReceivedClasses())
// store.dispatch(markReceivedProfile())

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
