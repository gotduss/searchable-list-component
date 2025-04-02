import React, { useState } from 'react';
import UserList from '../UserList';
import Filter from '../Filter';
import { UserAccordionListProps } from './index.types';

const UserAccordionList: React.FC<UserAccordionListProps> = ({
  users,
  attendedTitle = 'Attended',
  absentTitle = 'Absent',
  displayEmail = false,
}) => {
  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  );
  const attended = filteredUsers.filter(user => user.status === 'attended');
  const absent = filteredUsers.filter(user => user.status === 'absent');

  return (
    <div className="accordion-wrapper">
      <Filter value={filter} onChange={setFilter} />
      <UserList title={attendedTitle} users={attended} displayEmail={displayEmail} />
      <UserList title={absentTitle} users={absent} displayEmail={displayEmail} />
    </div>
  );
}

export default UserAccordionList;
