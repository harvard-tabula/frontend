import React, { PropTypes } from 'react';
import ClassComponentRedux from '../ClassComponentRedux/ClassComponentRedux';
import AddClass from '../../containers/user/AddClass';

const ClassListRedux = ({ classes, classSuggestions, grades, terms, years, emojis,
  onChangeClassId, onChangeGrade, onChangeWorkload, onChangeTerm, onChangeYear, onClickEmoji,
  onClickRemove, onSuggestionsClearRequested, getSuggestionValue, fetchClassSuggestions,
  onSuggestionSelected }) => (
    <section className="section">
      <div className="container is-fluid">
        <div className="heading">
          <h2 className="subtitle">Classes Taken</h2>
        </div>
        <div className="columns">
          <div className="column is-2">Class name</div>
          <div className="column is-1">Grade</div>
          <div className="column is-1">Hours</div>
          <div className="column is-1">Term</div>
          <div className="column is-1">Year</div>
          <div className="column is-4">Experience</div>
          <div className="column is-2">Remove</div>
        </div>
        {classes.map(classElement =>
          <ClassComponentRedux
            kye={classElement.id}
            grades={grades}
            classSuggestions={classSuggestions}
            terms={terms}
            years={years}
            num={classElement.id}
            emojis={emojis}
            tags={classElement.course_tags}
            name={classElement.course.name_short == null ? '' : classElement.course.name_short}
            grade={(classElement.grade == null) || (!classElement.grade) ? '' : classElement.grade}
            term={(classElement.term == null) || (!classElement.term) ? '' : classElement.term}
            year={(classElement.year == null) || (!classElement.year) ? '' : classElement.year}
            hours={(classElement.hours == null) || (!classElement.hours) ? '' : classElement.hours}
            hoursSuccess={classElement.hoursSuccess}
            onChangeSuggestion={(event, { newValue }) => onChangeClassId(classElement.id, newValue)}
            onSuggestionSelected={(event, { suggestion }) => onSuggestionSelected(classElement.id, suggestion)}
            {...classElement}
            onChangeGrade={onChangeGrade}
            onChangeWorkload={onChangeWorkload}
            onChangeTerm={onChangeTerm}
            onChangeYear={onChangeYear}
            onClickEmoji={onClickEmoji}
            onClickRemove={onClickRemove}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            onSuggestionsFetchRequested={({ value }) => fetchClassSuggestions(value)}
          />
        )}
      </div>
      <AddClass />
    </section>
  );

export default ClassListRedux;
