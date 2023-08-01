import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'home',
        path: '/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Bills',
        path: '/bills',
        icon:<IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Goals',
        path: '/goals',
        icon:<IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Expenses',
        path: '/expenses',
        icon:< FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Net Worth',
        path: '/net worth',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon:<IoIcons.IoIosSettings />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon:<IoIcons.IoIosLogOut />,
        cName: 'nav-text'
    },
]
