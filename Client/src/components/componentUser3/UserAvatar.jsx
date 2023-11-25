// UserAvatar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import style from './UserAvatar.module.css';

const UserAvatar = ({ userImage }) => {
  return (
    <div className={style.userAvatarContainer}>
      {userImage ? (
        <img
          src={userImage}
          alt="User Avatar"
          className={style.userAvatarImage}
        />
      ) : (
        <FontAwesomeIcon icon={faUser} className={style.userIcon} />
      )}
    </div>
  );
};

export default UserAvatar;

