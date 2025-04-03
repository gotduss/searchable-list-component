// Imports
import React from "react";
import { UserProps } from "./index.types";
import './index.styles.css';

// User component
const User: React.FC<UserProps> = ({
  name,
  email,
  imgUrl,
  displayEmail = true
}) => {
  return (
    <div className="user-card">
      <div className="user-img">
        <img
          src={imgUrl}
          alt={name}
        />
      </div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        {displayEmail &&
          <p className="user-email">{email}</p>
        }
      </div>
    </div>
  );
}

export default User;
