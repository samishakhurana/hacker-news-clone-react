import React from 'react';
import 'components/style.scss';
import { setMode } from 'store/app/actions'
import { connect } from 'react-redux';

class ToggleBtn extends React.Component {
  // constructor (context, props) {
  //   super(context, props);
  // }

  changeMode (evt) {
    var mode = evt.target.checked ? 'dark' : 'light'
    // this.props.setMode({type: 'SET_MODE', payload: mode})

    this.props.setMode(mode)
  }

  render () {
    return (
      <div className="toggle-btn">
        <label>
          <input type="checkbox" onChange={this.changeMode.bind(this)}/>
          <span></span>
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    'mode': 'abc'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (mode) => dispatch({type: 'SET_MODE', payload: mode})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleBtn);

