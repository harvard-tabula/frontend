import React, { PropTypes } from 'react';

const SuccessTagRedux = ({text, className, onClick}) => (
   <span className={className} onClick={onClick}>{text}</span>
)

export default SuccessTagRedux;