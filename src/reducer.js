import { combineReducers } from 'redux';
import {
  RECEIVE_USERS,
  START_USER_ADD,
  ADD_USER,
} from './constants';
import {reducer as formReducer} from 'redux-form';

function mainReducer(state = {
  users: [],
  loadingUsers: true,
  addingUser: false,
}, action) {
    switch (action.type) {
    case RECEIVE_USERS:
        return Object.assign({}, state, {
          users: action.users,
          loadingUsers: false,
        });
    case START_USER_ADD:
        return Object.assign({}, state, {
          addingUser: true,
        })
    case ADD_USER:
        return Object.assign({}, state, {
          addingUser: false,
          users: [
            ...state.users,
            action.employee,
          ]
        })
    default:
        return state;
    }
}


const reducer = combineReducers({
    main: mainReducer,
    form: formReducer,
});

export default reducer;
