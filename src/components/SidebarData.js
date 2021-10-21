import React from 'react';
import { AiFillContainer, AiFillHome, AiFillLike, AiOutlineGithub } from 'react-icons/ai';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'w-6/12 background-header flex justify-start items-center pt-2 pb-4 pl-2 list-none h-14'
    },
    {
        title: 'CV',
        path: '/cv',
        icon: <AiFillContainer />,
        cName: 'w-6/12 background-header flex justify-start items-center pt-2 pb-4 pl-2 list-none h-14'
    },
    {
        title: 'Github',
        path: '/github',
        icon: <AiOutlineGithub/>,
        cName: 'w-6/12 background-header flex justify-start items-center pt-2 pb-4 pl-2 list-none h-14'
    },
    {
        title: 'Hobbies',
        path: '/hobbies',
        icon: <AiFillLike />,
        cName: 'w-6/12 background-header flex justify-start items-center pt-2 pb-4 pl-2 list-none h-14'
    }
];