import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const ProfessionalInterests = ({professionalInterests, onTagClick}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">Professional Interests</h2>
      </div>
      <div id="class-pane">
        {professionalInterests.map(professionalInterset =>
          <SuccessTagRedux  
            key={professionalInterset.id}
            text={professionalInterset.text}
            className={professionalInterset.className}
            {...professionalInterset}
            onClick={() => onTagClick(professionalInterset.id)}
          />
        )}
      </div>
    </div>
  </section>
)

export default ProfessionalInterests;