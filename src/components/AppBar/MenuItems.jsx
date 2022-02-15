import React from 'react';
import {
  IoHomeOutline,
  IoCashOutline,
  IoLogoElectron,
  IoGlobeOutline,
  IoBulbOutline,
} from 'react-icons/io5';

const MenuItems = [
  {
    title: 'Home',
    path: '/',
    icon: <IoGlobeOutline size="1.5rem" />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoBulbOutline size="1.5rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Properties Avilable',
    path: '/properties-availble',
    icon: <IoHomeOutline size="1.5rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Our Process',
    path: '/our-process',
    icon: <IoLogoElectron size="2.5rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Get an Offer',
    path: '/get-offer',
    icon: <IoCashOutline size="2.5rem" />,
    cName: 'nav-text',
  },
];

export default MenuItems;
