import React, { PropTypes } from 'react';
import ClassComponentRedux from '../ClassComponentRedux/ClassComponentRedux'

const ClassListRedux = ({classes, grades, workloads, semesters,
  onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester, onClickEmoji}) => (
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
                    key={classElement.id}
                    grades={grades}
                    workloads={workloads}
                    semesters={semesters}
                    key={classElement.id}
                    num={classElement.id}
                    emojis={classElement.emojis}
                    {...classElement}
                    onBlurCourseId={onBlurCourseId}
                    onChangeGrade={onChangeGrade}
                    onChangeWorkload={onChangeWorkload}
                    onChangeSemester={onChangeSemester}
                    onClickEmoji={onClickEmoji}
                  />
                )}
              </div>
            </tbody>
          </table>
        </div>
      </section>
)

export default ClassListRedux;