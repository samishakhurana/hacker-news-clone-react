import React from 'react';
import 'components/style.scss'

const ToggleBtn = (props) => {

  const changeMode = function (evt) {
    props.changeMode(evt.target.checked ? 'dark' : 'light')
  }

  return (
    <div className="toggle-btn">
      <label>
        <input type="checkbox" onChange={changeMode}/>
        <span></span>
      </label>
    </div>
  )
}

export default ToggleBtn;