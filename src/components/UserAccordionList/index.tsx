// Imports
import React, { useState } from 'react';
import UserList from '../UserList';
import Filter from '../Filter';
import { UserAccordionListProps } from './index.types';

// UserAccordionList component
const UserAccordionList: React.FC<UserAccordionListProps> = ({
  users,
  attendedTitle = 'Attended',
  absentTitle = 'Absent',
  displayEmail = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Use toLowerCase to update all the names and emails to lower case
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Filter users by their status to add them to the right section
  const attended = filteredUsers.filter(user => user.status === 'attended');
  const absent = filteredUsers.filter(user => user.status === 'absent');

  return (
    <div className="accordion-wrapper">
      <Filter value={searchTerm} onChange={setSearchTerm} />
      <UserList title={attendedTitle} users={attended} displayEmail={displayEmail} />
      <UserList title={absentTitle} users={absent} displayEmail={displayEmail} />
    </div>
  );
}

export default UserAccordionList;
