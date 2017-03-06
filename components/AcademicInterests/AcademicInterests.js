import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const AcademicInterests = ({academicInterests, onTagClick}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">Academic Interests</h2>
      </div>
      <div id="class-pane">
        {academicInterests.map(academicInterest =>
          <SuccessTagRedux  
            key={academicInterest.id}
            text={academicInterest.text}
            className={academicInterest.className}
            {...academicInterest}
            onClick={() => onTagClick(academicInterest.id)}
          />
        )}
      </div>
    </div>
  </section>
)

export default AcademicInterests;