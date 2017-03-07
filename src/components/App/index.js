import React, { Component } from 'react';
import './styles.css';
import UserListContainer from '../../containers/UserListContainer';
import UserForm from '../../containers/UserFormContainer';


class App extends Component {
  render() {
    const child = (this.props.addingUser)
      ? <UserForm />
      : <UserListContainer />

    return (
      <div className="App">
        <div className="App-header">
          <h2>Nike Coding Test</h2>
        </div>

        <div className="App-content">
          {child}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  addingUser: React.PropTypes.bool.isRequired,
}

export default App;
