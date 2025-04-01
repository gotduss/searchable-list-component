export interface User {
  id: number;
  name: string;
  email: string;
  imgUrl?: string;
}

export interface UserAccordionProps {
  title: string;
  users: User[];
}
