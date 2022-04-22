import React from "react";
import Search from "./Search";

import "./Header.css";

 const Header=()=> {
    return ( 
        <>
    < header className = "Header" >
        <h1 className = "Header__title" > Weather <i class="fas fa-cloud"></i> </h1> 
        <Search /> 
        </header >
        </>
    );
}

export default Header;