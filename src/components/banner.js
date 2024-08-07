import React from 'react';
import '../styles/Banner.css'
//import logo from '../assets/logo.png'

function Banner({children}){
    return(
        <div className='lmj-banner' style={{fontSize: 20,}}>
            {children}
        </div>
    );
}

export default Banner