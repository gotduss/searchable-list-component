import { User } from "../components/UserList/index.types";
import userImg1 from '../assets/Dianne-Russell.png';
import userImg2 from '../assets/Ronald-Richards.png';
import userImg3 from '../assets/Arlene-McCoy.png';
import userImg4 from '../assets/Kathryn-Murphy.png';
import userImg5 from '../assets/Jenny-Wilson.png';
import userImg6 from '../assets/Wade-Warren.png';
import userImg7 from '../assets/Bessie-Cooper.png';

export const users: User[] = [
  {
    id: 1,
    name: 'Dianne Russell',
    email: 'dianne@hotmail.com',
    imgUrl: userImg1,
    status: 'attended'
  },
  {
    id: 2,
    name: 'Ronald Richards',
    email: 'ronald@hotmail.com',
    imgUrl: userImg2,
    status: 'attended'
  },
  {
    id: 3,
    name: 'Arlene McCoy',
    email: 'arlene@hotmail.com',
    imgUrl: userImg3,
    status: 'attended'
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    email: 'kathryn@hotmail.com',
    imgUrl: userImg4,
    status: 'attended'
  },
  {
    id: 5,
    name: 'Jenny Wilson',
    email: 'jenny@hotmail.com',
    imgUrl: userImg5,
    status: 'absent'
  },
  {
    id: 6,
    name: 'Wade Warren',
    email: 'wade@hotmail.com',
    imgUrl: userImg6,
    status: 'absent'
  },
  {
    id: 7,
    name: 'Bessie Cooper',
    email: 'bessie@hotmail.com',
    imgUrl: userImg7,
    status: 'absent'
  }
];
