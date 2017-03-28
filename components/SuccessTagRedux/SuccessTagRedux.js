import React, { PropTypes } from 'react';

const SuccessTagRedux = ({text, success, id, onClick}) => (
   <span className={success ? "tag is-medium is-success" : "tag is-medium"} onClick={onClick}>{text}</span>
)

export default SuccessTagRedux;