import React from 'react';
import User from '../User';
import { UserAccordionListProps } from './index.types';

const UserAccordionList: React.FC<UserAccordionListProps> = ({ attended, absent }) => {
  return (
    <div className="accordion-wrapper">
      <User title="Attended" users={attended} />
      <User title="Absent" users={absent} />
    </div>
  );
}

export default UserAccordionList;
