import React, { PropTypes } from 'react';

const UserInformation = ({profile, name, concentrations, years_coding, year, ethnicities, genders, concentration,
  nameSuccess, emailSuccess, genderSuccess, ethcnitySuccess, concentrationSuccess, yearsCodingSuccess, yearSuccess,
  onChangeName, onChangeEmail, onChangeConcentration, 
  onChangeYearsCoding, onBlurYearsCoding, onChangeGraduation, onBlurYear, onChangeGender, onChangeEthnicity}) => (
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
              <input className={nameSuccess ? "input is-success" : "input"} type="text" placeholder="ie. Rob Bowden" id="name"
              onChange={(e) => onChangeName(e.target.value)} value={profile.name}></input>
            </p>
          <label className="label">Email</label>
            <p className="control">
              <input className={emailSuccess ? "input is-success" : "input"} type="text" placeholder="ie. robbowden@college.harvard.edu" id="email"
              onChange={(e) => onChangeEmail(e.target.value)} value={profile.email}></input>
            </p>
          <label className="label">Gender</label>
            <p className="control">
              <span className="select">
                <select id="gender"
                onChange={(e) => onChangeGender(e.target.value)} value={profile.gender}>
                  {genders.map(gender => <option value={gender}>{gender}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Ethnicity</label>
            <p className="control">
              <span className="select">
                <select id="ethniticy"
                onChange={(e) => onChangeEthnicity(e.target.value)} value={profile.ethnicity}>
                  {ethnicities.map(ethnicity => <option value={ethnicity}>{ethnicity}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Concentration</label>
            <p className="control">
              <span className="select">
                <select id="concentration"
                onChange={(e) => onChangeConcentration(e.target.value)} value={concentration}>
                  {concentrations.map(concentration => <option value={concentration.name}>{concentration.name}</option>)}
                </select>
              </span>
            </p>
          <label className="label">Years Coding</label>
            <p className="control">
              <input className={yearsCodingSuccess ? "input is-success" : "input"} type="text" placeholder="ie. .5"
              onChange={(e) => onChangeYearsCoding(e.target.value)} onBlur={onBlurYearsCoding} value={profile.years_coding}></input>
            </p>
          <label className="label">Graduation Year</label>
            <p className="control">
              <input className={yearSuccess ? "input is-success" : "input"} type="text" placeholder="ie. 2018"
              onChange={(e) => onChangeGraduation(e.target.value)} onBlur={onBlurYear} value={profile.year}></input>
            </p>
        </div>
      </div>
    </div>
  </section>
)

export default UserInformation;