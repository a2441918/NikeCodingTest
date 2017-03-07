import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import React from 'react';
import { addUser } from '../actions';

class UserFormContainer extends React.Component {
  render() {
    return (
      <UserForm {...this.props}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UserFormContainer);
