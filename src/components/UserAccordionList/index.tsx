import React from 'react';
import UserList from '../UserList';
import { UserAccordionListProps } from './index.types';

const UserAccordionList: React.FC<UserAccordionListProps> = ({ users }) => {
  const attended = users.filter(user => user.status === 'attended');
  const absent = users.filter(user => user.status === 'absent');

  return (
    <div className="accordion-wrapper">
      <UserList title="Attended" users={attended} />
      <UserList title="Absent" users={absent} />
    </div>
  );
}

export default UserAccordionList;
