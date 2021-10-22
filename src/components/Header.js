import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';




const Header = () => {

    //se definen las variables para aplicar mediaquery
    const isBigScreen = useMediaQuery({ query: '(min-width: 740px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 739px)' })

    return (
    
        <Fragment>
            {isBigScreen && <HeaderDesktop />}
            {isTabletOrMobile && <HeaderMobile />}      
        </Fragment>

    );
}
 
export default Header;