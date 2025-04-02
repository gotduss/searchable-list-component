export interface User {
  id: number;
  name: string;
  email: string;
  imgUrl?: string;
  status: 'attended' | 'absent';
}

export interface UserListProps {
  title: string;
  users: User[];
  displayEmail?: boolean;
}
