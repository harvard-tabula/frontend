import React from 'react'
import { connect } from 'react-redux'
import { addClass } from '../../actions/user';

let AddClass = ({ dispatch }) => {
  let input

  return (
    <div>
      <a className="button" onClick={e => {
        e.preventDefault()
        dispatch(addClass())
      }}>
        Add Class
      </a>
    </div>
  )
}
AddClass = connect()(AddClass)

export default AddClass