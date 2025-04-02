import { User, UserListProps } from "../UserList/index.types";

export interface UserAccordionListProps {
  users: User[];
  attendedTitle?: UserListProps['title'];
  absentTitle?: UserListProps['title'];
  displayEmail?: boolean;
}
