import { connect } from 'react-redux';
import UserList from '../components/UserList';
import React from 'react';
import { startUserAdd } from '../actions';

class UserListContainer extends React.Component {

  render() {
    return (
      <UserList {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.main.users,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch(startUserAdd()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
