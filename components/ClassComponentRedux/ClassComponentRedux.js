import React, { PropTypes } from 'react';
import SuccessTag from '../SuccessTag';
import SuccessTagRedux from '../SuccessTagRedux/SuccessTagRedux'

const ClassComponentRedux = ({num, emojis, onBlurCourseId, onChangeGrade, onChangeWorkload, onChangeSemester,
                              onClickEmoji}) => (
    <tr>
      <td>
        <input className="input" type="text" placeholder="Class ID" id={"courseId" + num}
          onBlur={() => onBlurCourseId({num}, document.getElementById("courseId" + num).value)}></input>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"grades" + num}
            onChange={() => onChangeGrade({num}, document.getElementById("grades" + num).value)}>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"workload" + num}
            onChange={() => onChangeWorkload({num}, document.getElementById("workload" + num).value)}>
              <option value='1'>1 hour</option>
              <option value='2'>2 hours</option>
              <option value='3'>3 hours</option>
              <option value='4'>4 hours</option>
              <option value='5'>5 hours</option>
              <option value='6'>6 hours</option>
              <option value='7'>7 hours</option>
              <option value='8'>8 hours</option>
              <option value='9'>9 hours</option>
              <option value='10'>10 hours</option>
              <option value='11'>11 hours</option>
              <option value='12'>12 hours</option>
              <option value='13'>13 hours</option>
              <option value='14'>14 hours</option>
              <option value='15'>15 hours</option>
              <option value='16'>15+ hours</option>
            </select>
          </span>
        </p>
      </td>
      <td>
        <p className="control">
          <span className="select">
            <select id={"semester" + num}
            onChange={() => onChangeSemester({num}, document.getElementById("semester" + num).value)}>
              <option value='Fall2016'>Fall 2016</option>
              <option value='Spring2016'>Spring 2016</option>
              <option value='Fall2015'>Fall 2015</option>
              <option value='Spring2015'>Spring 2015</option>
              <option value='Fall2014'>Fall 2014</option>
              <option value='Spring2014'>Spring 2014</option>
              <option value='Fall2013'>Fall 2013</option>
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