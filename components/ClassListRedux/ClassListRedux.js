import React, { PropTypes } from 'react';
import ClassComponentRedux from '../ClassComponentRedux/ClassComponentRedux'

const ClassListRedux = ({classes, grades, workloads, semesters, emojis,
  onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester, onClickEmoji,
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
                <th>Semester</th>
                <th>Assoicated Emojis</th>
              </tr>
            </thread>
            <tbody>
              <div id="class-pane">
                {classes.map(classElement =>
                  <ClassComponentRedux  
                    grades={grades}
                    workloads={workloads}
                    semesters={semesters}
                    num={classElement.id}
                    emojis={emojis}
                    tags={classElement.course_tags}
                    name={classElement.course.name_short==null ? '' : classElement.course.name_short}
                    grade={(classElement.grade==null) || (!classElement.grade)  ? '' : classElement.grade}
                    semester={(classElement.semester==null) || (!classElement.semester) ? '' : classElement.semester}
                    hours={(classElement.hours==null) || (!classElement.hours) ? '' : classElement.hours}
                    {...classElement}
                    onBlurCourseId={onBlurCourseId}
                    onChangeGrade={onChangeGrade}
                    onChangeWorkload={onChangeWorkload}
                    onChangeSemester={onChangeSemester}
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