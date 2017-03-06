import React, { PropTypes } from 'react';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const Languages = ({languages, onTagClick}) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2 className="subtitle">Languages</h2>
      </div>
      <div id="class-pane">
        {languages.map(language =>
          <SuccessTagRedux  
            key={language.id}
            text={language.text}
            className={language.className}
            {...language}
            onClick={() => onTagClick(language.id)}
          />
        )}
      </div>
    </div>
  </section>
)

export default Languages;