import React from 'react';
import style from './style.css';

const Modal = ({ showModal }) => (
  <div>
    {showModal ?
      <div id="modal" className={style.modal}>
        <div className={style.modalcontent}>
          <p>Your session has timed out</p>
          <p>Please refresh your page to log back in</p>
        </div>
      </div>
      : null}
  </div>
);

export default Modal;
