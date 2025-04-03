// Imports
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import User from "../User";
import { UserListProps } from "./index.types";

// UserList component
const UserList: React.FC<UserListProps> = ({
  title,
  users,
  displayEmail = true
}) => {
  return (
    <Accordion
      disableGutters={true}
      square={true}
      sx={{
        borderTop: '1px solid #E4E5E8',
        borderBottom: '1px solid #E4E5E8',
        boxShadow: '0',
        '&:last-child': {
          borderTop: '0'
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          fontWeight: '500',
          color: '#5A6D80'
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderTop: '1px solid #E4E5E8'
        }}
      >
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            imgUrl={user.imgUrl}
            displayEmail={displayEmail}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default UserList;
