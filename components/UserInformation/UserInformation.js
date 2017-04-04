import React, { PropTypes } from 'react';

const UserInformation = ({profile, name, concentrations, years_coding, year, ethnicities, genders,
onChangeName, onChangeEmail, onChangeConcentration, 
onChangeYearsCoding, onChangeGraduation, onChangeGender, onChangeEthnicity}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">User Information</h2>
      </div>
      <div className="columns">
        <div className="column is-one-third">
            <figure className="image is-256by256">
              <img src={profile.avatar}></img>
            </figure>
        </div>
        <div className="column">
          <label className="label">Name</label>
            <p className="control">
              <input className="input" type="text" placeholder="ie. Rob Bowden" id="name"
              onChange={(e) => onChangeName(e.target.value)} value={profile.name}></input>
            </p>
          <label className="label">Email</label>
            <p className="control">
              <input className="input" type="text" placeholder="ie. robbowden@college.harvard.edu" id="email"
              onChange={(e) => onChangeEmail(e.target.value)} value={profile.email}></input>
            </p>
          <label className="label">Gender</label>
            <p className="control">
              <span className="select">
                <select id="gender"
                onChange={(e) => onChangeGender(e.target.value)}>
                  {genders.map(gender => <option value={gender}>{gender}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Ethnicity</label>
            <p className="control">
              <span className="select">
                <select id="ethniticy"
                onChange={(e) => onChangeEthnicity(e.target.value)}>
                  {ethnicities.map(ethnicity => <option value={ethnicity}>{ethnicity}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Concentration</label>
            <p className="control">
              <span className="select">
                <select id="concentration"
                onChange={(e) => onChangeConcentration(e.target.value)}>
                </select>
              </span>
            </p>
          <label className="label">Years Coding</label>
            <p className="control">
              <span className="select">
                <select id="codingYears"
                onChange={(e) => onChangeCodingYears(e.target.value)}>
                  {years_coding.map(years_coding_element => <option value={years_coding_element}>{years_coding_element}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Graduation Year</label>
            <p className="control">
              <span className="select">
                <select id="year"
                onChange={(e) => onChangeYear(e.target.value)}>
                  {year.map(years_element => <option value={years_element}>{years_element}</option>)}
                </select>
              </span>
            </p>
        </div>
      </div>
    </div>
  </section>
)

export default UserInformation;