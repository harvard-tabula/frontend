import React, { PropTypes } from 'react';
import style from './style.css';

const SuccessTagRedux = ({ text, success, id, title, onClick }) => (
  <span
    className={success ? `${style.customTag} tag is-medium is-success` : `${style.customTag} tag is-medium`}
    title={title} onClick={onClick}
  >
    {text}
  </span>
);

export default SuccessTagRedux;
