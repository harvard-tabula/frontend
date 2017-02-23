import React, { PropTypes } from 'react';
import SuccessTag from '../SuccessTag';

class ClassComponent extends React.Component {
  render () {
    return (
      <tr>
        <td>
          <input className="input" type="text" placeholder="Class ID" value=""></input>
        </td>
        <td>
          <p className="control">
            <span className="select">
              <select>
                <option>A</option>
                <option>A-</option>
                <option>B+</option>
                <option>B</option>
                <option>B-</option>
                <option>C+</option>
                <option>C</option>
                <option>C-</option>
              </select>
            </span>
          </p>
        </td>
        <td>
          <p className="control">
            <span className="select">
              <select>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
                <option>5 hours</option>
                <option>6 hours</option>
                <option>7 hours</option>
                <option>8 hours</option>
                <option>9 hours</option>
                <option>10 hours</option>
                <option>11 hours</option>
                <option>12 hours</option>
                <option>13 hours</option>
                <option>14 hours</option>
                <option>15 hours</option>
                <option>15+ hours</option>
              </select>
            </span>
          </p>
        </td>
        <td>
          <p className="control">
            <span className="select">
              <select>
                <option>Fall 2016</option>
                <option>Spring 2016</option>
                <option>Fall 2015</option>
                <option>Spring 2015</option>
                <option>Fall 2014</option>
                <option>Spring 2014</option>
                <option>Fall 2013</option>
              </select>
            </span>
          </p>
        </td>
        <td>
          <SuccessTag item="😍" />
          <SuccessTag item="😆" />
          <SuccessTag item="😫" />
          <SuccessTag item="😐" />
          <SuccessTag item="😴" />
          <SuccessTag item="😓" />
          <SuccessTag item="😡" />
          <SuccessTag item="🤕" />
        </td>
      </tr>
    );
  }
}

export default ClassComponent;