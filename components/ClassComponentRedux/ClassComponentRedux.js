import React, { PropTypes } from 'react';
import SuccessTag from '../SuccessTag';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const ClassComponentRedux = ({grades, workloads, semesters, num, emojis, tags,
  name, grade, semester, hours,
  onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester, onClickEmoji,
  onClickRemove }) => (
    <tr>
      <td>
        <input className="input" type="text" placeholder="Class ID"
          onChange={(e) => onBlurCourseId({num}, e.target.value)} value={name}></input>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"grades" + num}
            onChange={(e) => onChangeGrade({num}, e.target.value)} value={grade}>
              {grades.map(grade => <option value={grade}>{grade}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"workload" + num}
            onChange={(e) => onChangeWorkload({num}, e.target.value)} value={hours}>
              {workloads.map(workload => <option value={workload}>{workload}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"semester" + num}
            onChange={(e) => onChangeSemester({num}, e.target.value)} value={semester}>
              {semesters.map(semesters => <option value={semesters.semester}>{semesters.semester}</option>)}
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