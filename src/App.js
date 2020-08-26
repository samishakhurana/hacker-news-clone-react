import React from 'react';
import Header from 'components/Header'
import NewsBoard from 'components/NewsBoard'
import 'App.css'

class App extends React.Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      mode: 'light'
    }
  }

  changeMode (mode) {
    this.setState({mode: mode})
  }

  render () {
    return (
      <div className="app-container">
        <Header mode={this.state.mode} changeMode={this.changeMode.bind(this)}/>
        <NewsBoard mode={this.state.mode}/>
     </div>
    );
  }
}

export default App;
