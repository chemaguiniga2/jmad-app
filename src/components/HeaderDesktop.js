import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const HeaderDesktop = () => {
    return (
        <header className="flex flex-row bg-gray-200 p-8 rounded-b-lg background-header text-white	">
            <div className="container w-1/5">
                <h1>Aqui va logo</h1>
            </div>
            <div className="container flex flex-row justify-around w-3/5">
                {SidebarData.map((item) => (
                    <Link to={item.path} className="flex flex-col items-center">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className="container flex justify-end w-1/5">
                <AiOutlineInstagram />
            </div>
        </header>
    );
}
 
export default HeaderDesktop;