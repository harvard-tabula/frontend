import React from 'react';
import { connect } from 'react-redux';
import { addClass } from '../../actions/user';

const AddClassComponent = ({ dispatch }) => (
  <div className="section is-small">
    <div className="container has-text-centered">
      <a
        className="button"
        onClick={e => {
          e.preventDefault();
          dispatch(addClass());
        }}
      >
        Add Class
      </a>
    </div>
  </div>
);
const AddClass = connect()(AddClassComponent);

export default AddClass;
