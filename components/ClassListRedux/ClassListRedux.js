import React, { PropTypes } from 'react';
import ClassComponentRedux from '../ClassComponentRedux/ClassComponentRedux'

const ClassListRedux = ({classes, onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester,
                        onClickEmoji1, onClickEmoji2, onClickEmoji3, onClickEmoji4, onClickEmoji5, 
                      onClickEmoji6, onClickEmoji7, onClickEmoji8}) => (
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
                    num={classElement.id}
                    {...classElement}
                    onBlurCourseId={onBlurCourseId}
                    onChangeGrade={onChangeGrade}
                    onChangeWorkload={onChangeWorkload}
                    onChangeSemester={onChangeSemester}
                    onClickEmoji1={onClickEmoji1(classElement.id)}
                    onClickEmoji2={onClickEmoji2(classElement.id)}
                    onClickEmoji3={onClickEmoji3(classElement.id)}
                    onClickEmoji4={onClickEmoji4(classElement.id)}
                    onClickEmoji5={onClickEmoji5(classElement.id)}
                    onClickEmoji6={onClickEmoji6(classElement.id)}
                    onClickEmoji7={onClickEmoji7(classElement.id)}
                    onClickEmoji8={onClickEmoji8(classElement.id)}
                  />
                )}
              </div>
            </tbody>
          </table>
        </div>
      </section>
)

export default ClassListRedux;