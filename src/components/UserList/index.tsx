import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserListProps } from "./index.types";
import './index.styles.css';

const UserList: React.FC<UserListProps> = ({ title, users, displayEmail = true }) => {
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
                <p className="user-name">{user.name}</p>
                {displayEmail &&
                  <p className="user-email">{user.email}</p>
                }
              </div>
            </div>
          ))}
        </>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserList;
