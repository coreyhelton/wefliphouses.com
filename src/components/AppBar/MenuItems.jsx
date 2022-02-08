import React from 'react';
import { IoHome, IoIceCream } from 'react-icons/io5';

const MenuItems = [
  {
    title: 'Home',
    path: '/',
    icon: <IoHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIceCream />,
    cName: 'nav-text',
  },
];

export default MenuItems;
