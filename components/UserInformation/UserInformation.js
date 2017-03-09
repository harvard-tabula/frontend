import React, { PropTypes } from 'react';

const ClassListRedux = ({userInformation, onBlurName, onBlurEmail, onChangeConcentration, onChangeCodingYears, onChangeGraduation}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">User Information</h2>
      </div>
      <div className="columns">
        <div className="column is-one-third">
            <figure className="image is-256by256">
              <img src="http://bulma.io/images/placeholders/256x256.png"></img>
            </figure>
        </div>
        <div className="column">
          <label className="label">Name</label>
            <p className="control">
              <input className="input" type="text" placeholder="ie. Rob Bowden" id="name"
              onBlur={() => onBlurName(document.getElementById("name").value)}></input>
            </p>
          <label className="label">Email</label>
            <p className="control">
              <input className="input" type="text" placeholder="ie. robbowden@college.harvard.edu" id="email"
              onBlur={() => onBlurEmail(document.getElementById("email").value)}></input>
            </p>
          <label className="label">Concentration</label>
            <p className="control">
              <span className="select">
                <select id="concentration"
                onChange={() => onChangeConcentration(document.getElementById("concentration").value)}>
                  <option value="Applied Mathematics">Applied Mathematics</option>
                  <option value="Bioengineering">Bioengineering</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Environmental Science and Engineering">Environmental Science and Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Statistics">Statistics</option>
                </select>
              </span>
            </p>
          <label className="label">Years Coding</label>
            <p className="control">
              <span className="select">
                <select id="codingYears"
                onChange={() => onChangeCodingYears(document.getElementById("codingYears").value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8+-</option>
                </select>
              </span>
            </p>
          <label className="label">Graduation Year</label>
            <p className="control">
              <input className="input" type="email" placeholder="ie. 2018"></input>
            </p>
        </div>
      </div>
    </div>
  </section>
)

export default ClassListRedux;