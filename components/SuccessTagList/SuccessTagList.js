import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux';

const SuccessTagList = ({ title, list, selected, onTagClick }) => (
  <section className="column">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">{title}</h2>
      </div>
      <div id="class-pane">
        {list.map(listElement =>
          <SuccessTagRedux
            key={listElement.id}
            text={listElement.name}
            success={(selected.indexOf(listElement.id) > -1)}
            id={listElement.id}
            {...listElement}
            onClick={() => onTagClick(listElement.id)}
          />
        )}
      </div>
    </div>
  </section>
);

export default SuccessTagList;
