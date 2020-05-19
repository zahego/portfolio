import React from 'react';

export const Navbar=()=>{
    return(
        <header className="navbar" style={{display:'no-wrap'}}>
            <span ><a href="./index.html" style={{fontSize:'24px'}}>LOGO</a>  ||  </span>
            <span><a href="#skill">skill</a>  ||  </span>
            <span><a href="#project">project</a>  ||  </span>
            <span><a href="#education">education</a>  ||  </span>
            <span><a href="#about-me">about me</a>  ||  </span>
            <span><a href="#contact-me">contact me</a>  ||  </span>
            <span><a href="#resume">resume</a></span>
        </header>
    
    )
}
