import React from 'react';
const Footer=()=>{
const currYear=new Date().getFullYear();

    return(
        <footer>
            <p>copyright @ {currYear}</p>
        </footer>
    )
}
export default Footer;