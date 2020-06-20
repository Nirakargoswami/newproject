import React from 'react';
import {BOX,IMAGE} from "../component/componetn"
import LOGO from "/home/bhumika/Desktop/Newwebsitedelet./newwbsite/src/logo.svg";
import styled, { css } from "styled-components";



const LOGBOX = styled(BOX)`
height:40px;
width:50px;
border: 1px dotted green;
padding-top:4px;
`;


const logo = (props) => {
    return (
      <LOGBOX size={props.size}>
        <IMAGE src={LOGO} />
      </LOGBOX>
    );
}

export default logo;
