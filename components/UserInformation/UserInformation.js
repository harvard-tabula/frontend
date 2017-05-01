import React, { PropTypes } from 'react';
import VisibleTag from '../../containers/user/VisibleTag';

const UserInformation = ({ profile, name, concentrations, years_coding, year, ethnicities, genders, concentration,
  nameSuccess, emailSuccess, genderSuccess, ethcnitySuccess, concentrationSuccess, yearsCodingSuccess, yearSuccess,
  onChangeName, onChangeEmail, onChangeConcentration,
  onChangeYearsCoding, onBlurYearsCoding, onChangeGraduation, onBlurYear, onChangeGender, onChangeEthnicity }) => (
    <div className="container is-fluid">
      <div className="heading">
        <h2 className="subtitle">Personal Profile</h2>
      </div>
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src={profile.avatar} alt="Your beautiful face." />
          </figure>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input
                    className={nameSuccess ? 'input is-success' : 'input'}
                    type="text" placeholder="ie. Rob Bowden" id="name"
                    onChange={(e) => onChangeName(e.target.value)}
                    value={profile.name}
                  />
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Email</label>
                <p className="control">
                  <input
                    className={emailSuccess ? 'input is-success' : 'input'}
                    type="text" placeholder="ie. robbowden@college.harvard.edu"
                    id="email" onChange={(e) => onChangeEmail(e.target.value)}
                    value={profile.email}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Concentration</label>
                <p className="control">
                  <span className="select">
                    <select
                      id="concentration"
                      onChange={(e) => onChangeConcentration(e.target.value)}
                      value={concentration}
                    >
                    {
                      concentrations.map(concentration =>
                        <option
                          value={concentration.name}
                        >{concentration.name}
                        </option>)
                    }
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Years Coding Before College</label>
                <p className="control">
                  <input
                    className={yearsCodingSuccess ? 'input is-success' : 'input'}
                    type="text" placeholder="ie. .5"
                    onChange={(e) => onChangeYearsCoding(e.target.value)}
                    onBlur={onBlurYearsCoding} value={profile.years_coding}
                  ></input>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Class Year</label>
                <p className="control">
                  <input
                    className={yearSuccess ? 'input is-success' : 'input'}
                    type="text" placeholder="ie. 2018" value={profile.year}
                    onChange={(e) => onChangeGraduation(e.target.value)} onBlur={onBlurYear}
                  ></input>
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <VisibleTag />
          </div>
        </div>
      </div>
    </div>
);

export default UserInformation;
