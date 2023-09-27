import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.allUsers.allUsers);
  const searchTerm = useSelector((state) => state.allUsers.searchTerm);

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;