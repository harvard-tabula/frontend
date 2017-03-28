import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const SuccessTagList = ({title, list, onTagClick}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">{title}</h2>
      </div>
      <div id="class-pane">
        {list.map(listElement =>
          <SuccessTagRedux  
            key={listElement.id}
            text={listElement.text}
            success={listElement.success}
            id={listElement.id}
            {...listElement}
            onClick={() => onTagClick(listElement.id)}
          />
        )}
      </div>
    </div>
  </section>
)

export default SuccessTagList;