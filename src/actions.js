import {
  RECEIVE_USERS,
  START_USER_ADD,
  ADD_USER,
} from './constants';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function startUserAdd() {
  return {
    type: START_USER_ADD,
  };
}


export function addUser() {
  return (dispatch, getState) => {
    const form = getState().form;
    const employee = {
      name: form.employee.name.value,
      surname: form.employee.surname.value,
    };
    dispatch({
      type: ADD_USER,
      employee,
    });
  }
}
