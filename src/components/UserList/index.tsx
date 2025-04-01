import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserListProps } from "./index.types";

const UserList: React.FC<UserListProps> = ({ title, users }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <>
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-img">
                <img
                  src={user.imgUrl}
                  alt={user.name}
                />
              </div>
              <div className="user-info">
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            </div>
          ))}
        </>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserList;
