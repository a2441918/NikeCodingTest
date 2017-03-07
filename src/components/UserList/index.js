import React from 'react';
import User from '../User';
import './styles.css';

const UserList = ({ users, onAdd }) => {

  const employeeNodes = users.map(employee => (
      <User
          key={employee.name + employee.surname}
          {...employee}
      />
  ));

  return (
      <div>
          <ul
            className="UserList"
          >
              {employeeNodes}
          </ul>

          <button
            className="UserList-button"
            onClick={onAdd}
          >
            Add
          </button>
      </div>
  );
};

UserList.propTypes = {
  users: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          surname: React.PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default UserList;
