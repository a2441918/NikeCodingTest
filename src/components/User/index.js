import React from 'react';
import './styles.css';

const User = ({ name, surname }) => {
  return (
    <li
      className="User-item"
    >
        {name} {surname}
    </li>
  );
};

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired,
};

export default User;
