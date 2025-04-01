import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserAccordionProps } from "./index.types";

const User: React.FC<UserAccordionProps> = ({ title, users }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
                src={user.imgUrl || 'https://via.placeholder.com/32'}
                alt={user.name}
              />
              <div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default User;
