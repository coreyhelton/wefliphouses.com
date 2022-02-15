import React from 'react';
import { HiHome, HiInformationCircle, HiMailOpen } from 'react-icons/hi';
import { FaSign } from 'react-icons/fa';
import { GiCycle } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const MenuItems = [
  {
    title: 'Home',
    path: '/',
    icon: <HiHome size="2rem" />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <HiInformationCircle size="2rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Properties Avilable',
    path: '/properties-availble',
    icon: <FaSign size="2rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Our Process',
    path: '/our-process',
    icon: <GiCycle size="1.8rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Get an Offer',
    path: '/get-offer',
    icon: <RiMoneyDollarCircleFill size="2rem" />,
    cName: 'nav-text',
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <HiMailOpen size="2rem" />,
    cName: 'nav-text',
  },
];

export default MenuItems;
