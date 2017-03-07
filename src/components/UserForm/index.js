import React from 'react';
import User from '../User';
import './styles.css';
import { reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please provide a name';
  }

  if (!values.surname) {
    errors.surname = 'Please provide a surname';
  }

  return errors;
}


const UserForm = ({ addUser, fields: { name, surname, hobbies}, handleSubmit }) => {

  return (
    <form
      className="UserForm-form"
      onSubmit={handleSubmit(addUser)}
    >
      <div>
        <input type="text" placeholder="First Name" className="UserForm-input" {...name} />
        {name.touched && name.error && <div className="UserForm-error">{name.error}</div>}
      </div>
      <div>
        <input type="text" placeholder="Last Name" className="UserForm-input" {...surname} />
        {surname.touched && surname.error && <div className="UserForm-error">{surname.error}</div>}
      </div>
      <div>
        <input type="text" placeholder="Hobbies" className="UserForm-input" {...hobbies} />
      </div>
      <button onClick={() => this.handleClick()} type="submit" className="UserForm-button">Submit</button>
    </form>
  );
}

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

export default reduxForm({
  form: 'employee',
  fields: ['name', 'surname'],
  validate,
})(UserForm);
