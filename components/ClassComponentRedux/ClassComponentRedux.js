import React, { PropTypes } from 'react';
import SuccessTag from '../SuccessTag';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const ClassComponentRedux = ({grades, workloads, semesters, num,emojis, 
  onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester, onClickEmoji}) => (
    <tr>
      <td>
        <input className="input" type="text" placeholder="Class ID" id={"courseId" + num}
          onBlur={(e) => onBlurCourseId({num}, e.target.value)}></input>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"grades" + num}
            onChange={(e) => onChangeGrade({num}, e.target.value)}>
              {grades.map(grade => <option value={grade}>{grade}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"workload" + num}
            onChange={(e) => onChangeWorkload({num}, e.target.value)}>
              {workloads.map(workload => <option value={workload}>{workload}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"semester" + num}
            onChange={(e) => onChangeSemester({num}, e.target.value)}>
              {semesters.map(semesters => <option value={semesters}>{semesters}</option>)}
            </select>
          </span>
        </p>
      </td>
      <td>
        {emojis.map(emoji =>
          <SuccessTagRedux  
            key={emoji.id}
            text={emoji.text}
            className={emoji.className}
            {...emoji}
            onClick={() => onClickEmoji(num, emoji.id)}
          />
        )}
      </td>
    </tr>
)

export default ClassComponentRedux;