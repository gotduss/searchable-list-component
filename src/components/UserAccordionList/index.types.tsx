import { User, UserListProps } from "../UserList/index.types";

export interface UserAccordionListProps {
  users: User[];
  title?: UserListProps['title'];
}
