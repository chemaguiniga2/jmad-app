import React, {useState, Fragment} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';




const HeaderMobile = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleClickSidebar = () => {
        sidebar ? setSidebar(false) : setSidebar(true);
    }


    return (
        <Fragment>
            
                <div className="background-header h-20 flex justify-between items-center">
                    <Link to='#' className="ml-8 text-3xl bg-none">
                        <AiOutlineMenu
                            onClick={handleClickSidebar}
                        />
                    </Link>
                    <h3 className="mr-4">Logo</h3>
                </div>
                <nav className={sidebar ? "left-0 transition duration-300 background-header w-60 h-screen  flex justify-center fixed top-0" :"background-header w-60 h-screen  flex justify-center fixed top-0 -left-full transition duration-700"}>
                    <ul className="w-full">
                        <li className="background-header w-full h-20 flex justify-start items-center ml-8">
                            <AiOutlineClose onClick={handleClickSidebar}/>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className="no-underline text-white text-lg w-11/12 h-full flex items-center pr-4 rounded-t hover:bg-blue-400">
                                        {item.icon}
                                        <span className="ml-4">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            
        </Fragment>
    );
}
 
export default HeaderMobile;