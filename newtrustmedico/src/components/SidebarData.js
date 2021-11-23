import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/Login',
    icon: <AiIcons.AiOutlineUserSwitch/>,
    cName: 'nav-text'
  }
];