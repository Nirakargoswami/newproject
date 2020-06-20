
import React from "react";
import styled, { css } from "styled-components";


import {  INPUT  } from "../component/componetn";



const SEARCHINPUT = styled(INPUT)`
height:40px;  
width:100%;

@media(min-width:450px){
  display:none;

}
`;


const searchbox = (props) => {
    return (
    
        
          <SEARCHINPUT />
    
      
    );
}

export default searchbox;




