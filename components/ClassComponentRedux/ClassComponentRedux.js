import React, { PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';
import SuccessTag from '../SuccessTag';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const ClassComponentRedux = ({classSuggestions, grades, terms, years, num, emojis, tags,
  name, grade, term, year, hours, classSuccess,
  onChangeGrade, onChangeWorkload, onChangeTerm, onChangeYear, onClickEmoji,
  onClickRemove, onSuggestionsClearRequested, getSuggestionValue, onChangeSuggestion,
  fetchClassSuggestions, onSuggestionsFetchRequested, onSuggestionSelected }) => (
    <tr>
      <td>
        <Autosuggest
          suggestions={classSuggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={(suggestion) =>  <div>{suggestion.catalog_number}</div>}
          inputProps={{placeholder:'Enter Course Id', value:name, onChange:onChangeSuggestion}}
          onSuggestionSelected={onSuggestionSelected}
        />
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select
            onChange={(e) => onChangeGrade({num}, e.target.value)} value={grade}>
              {grades.map(grade => <option value={grade}>{grade}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <input className="input" type="text" placeholder="Num of Hours (ie. 1)"
          onChange={(e) => onChangeWorkload({num}, e.target.value)} value={hours}></input>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select
            onChange={(e) => onChangeTerm({num}, e.target.value)} value={term}>
              {terms.map(term => <option value={term}>{term}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select
            onChange={(e) => onChangeYear({num}, e.target.value)} value={year}>
              {years.map(year => <option value={year}>{year}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        {emojis.map(emoji =>
          <SuccessTagRedux  
            key={emoji.id}
            text={emoji.text}
            success={(tags.indexOf(emoji.id) > -1 ? true : false)}
            title={emoji.hover}
            {...emoji}
            onClick={() => onClickEmoji(num, emoji.id)}
          />
        )}
      </td>
      <td>
        <a className="delete" onClick={() => onClickRemove({num})}></a>
      </td>
    </tr>
)

export default ClassComponentRedux;