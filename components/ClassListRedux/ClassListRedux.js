import React, { PropTypes } from 'react';
import ClassComponentRedux from '../ClassComponentRedux/ClassComponentRedux'

const ClassListRedux = ({classes, grades, workloads, terms, years, emojis,
  onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeTerm, onChangeYear, onClickEmoji,
  onClickRemove }) => (
  <section className="section">
        <div className="container">
          <div className="heading">
            <h2 className="subtitle">Classes Taken</h2>
          </div>
          <table className="table">
            <thread>
              <tr>
                <th>Class name</th>
                <th>Grade</th>
                <th>Workload</th>
                <th>Term</th>
                <th>Year</th>
                <th>Assoicated Emojis</th>
              </tr>
            </thread>
            <tbody>
              <div id="class-pane">
                {classes.map(classElement =>
                  <ClassComponentRedux  
                    grades={grades}
                    workloads={workloads}
                    terms={terms}
                    years={years}
                    num={classElement.id}
                    emojis={emojis}
                    tags={classElement.course_tags}
                    name={classElement.course.name_short==null ? '' : classElement.course.name_short}
                    grade={(classElement.grade==null) || (!classElement.grade)  ? '' : classElement.grade}
                    term={(classElement.term==null) || (!classElement.term) ? '' : classElement.term}
                    year={(classElement.year==null) || (!classElement.year) ? '' : classElement.year}
                    hours={(classElement.hours==null) || (!classElement.hours) ? '' : classElement.hours}
                    {...classElement}
                    onBlurCourseId={onBlurCourseId}
                    onChangeGrade={onChangeGrade}
                    onChangeWorkload={onChangeWorkload}
                    onChangeTerm={onChangeTerm}
                    onChangeYear={onChangeYear}
                    onClickEmoji={onClickEmoji}
                    onClickRemove={onClickRemove}
                  />
                )}
              </div>
            </tbody>
          </table>
        </div>
      </section>
)

export default ClassListRedux;