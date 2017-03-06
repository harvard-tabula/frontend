import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const Milestones = ({milestones, onTagClick}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">Milestones</h2>
      </div>
      <div id="class-pane">
        {milestones.map(milestone =>
          <SuccessTagRedux  
            key={milestone.id}
            text={milestone.text}
            className={milestone.className}
            {...milestone}
            onClick={() => onTagClick(milestone.id)}
          />
        )}
      </div>
    </div>
  </section>
)

export default Milestones;