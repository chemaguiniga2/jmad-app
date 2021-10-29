import React from 'react';



const Img = ({srcImg, atlName, classes}) => {
    return (
        <div className={classes}>
            <img
                className="w-9/12"
                src={srcImg}
                alt={atlName}
            />
        </div>
    );
}
 
export default Img;