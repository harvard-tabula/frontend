import React, { PropTypes } from 'react';

const SuccessTagRedux = ({text, success, id, title, onClick}) => (
   <span className={success ? "tag is-medium is-success" : "tag is-medium"} title={title} onClick={onClick}>{text}</span>
)

export default SuccessTagRedux;