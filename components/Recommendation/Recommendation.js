import React, { PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';

const Recommendation = ({ classSuggestions, name, recommendations, recommendationFetched, tags,
  onSuggestionsClearRequested, getSuggestionValue, fetchClassSuggestions,
  onSuggestionSelected, onChangeClassId, onSuggestionsFetchRequested }) => (
  <div className="section">
    <div className="container has-text-centered">
      <div className="field">
        <p className="control">
          <Autosuggest
            theme={{
              input: 'input',
              suggestionsContainerOpen: 'card',
              suggestion: 'button is-white is-fullwidth',
            }}
            suggestions={classSuggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={(suggestion) => <div>{suggestion.catalog_number}</div>}
            inputProps={{ placeholder: 'Search for the Couse', value: name, onChange: (event, { newValue }) => onChangeClassId(newValue) }}
            onSuggestionSelected={onSuggestionSelected}
          />
        </p>
      </div>
      <br />
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">
            {recommendationFetched ?
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">{recommendations.course.title}</p>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Description</h4>
                    <p>{recommendations.course.description}</p>
                  </div>
                </div>
              </div>
            : null}
        </div>
        <div className="column">
          {recommendationFetched ?
            <div>
              <p>Expected Grade: {recommendations.grade}</p>
              <p>Expected Workload: {recommendations.hours} hours</p>
              {tags.map((tag) =>
                <span className="tag is-medium">{tag.name}</span>)}
            </div>
          : null}
        </div>
      </div>
    </div>
  </div>
);

export default Recommendation;
