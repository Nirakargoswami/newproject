import React from 'react';
import {FLEXBOX,IMAGE,IMAGEBOX,BOX} from "../component/componetn"
 import styled, { css } from "styled-components";
import LOGO from "/home/bhumika/Desktop/Newwebsitedelet./newwbsite/src/assets/technology_banner_background_02_vector_180749.jpg";


const SIDEBARFLEXBOX = styled(FLEXBOX)`
  flex-direction: column;
  background-color: gray;
  @media (min-width: 720px) {
    padding-top: 3rem;
    max-width:900p;
  };

  @media(max-width:720px) {
    flex-direction: row;
  };
`;

const BOXOFSIDEBAR = styled(IMAGEBOX)`
  @media (min-width: 720px) {
    padding: 0.5rem;
    background-color:gray;
  }
  @media (max-width: 720px) {
    width: 50%;
  }
`;
const BOXOFSIDE = styled(IMAGEBOX)`
  background-color: gray;
  @media (max-width: 720px) {
    width: 50%;
  }
`;
const SIDEBARBOX = styled(BOX)`



`

const BOXIMAGE = styled(IMAGE)`
  @media (min-width: 720px) {
  
    
width: 200px;
height: 200px;

background: #AB4747;
border-radius: 131px;
  }
`;

const side = () => {
    return (
      <div>
        <SIDEBARFLEXBOX>
          <BOXOFSIDE>
            <IMAGEBOX  style={{paddingLeft:"25px",paddingTop:"20px"}} >
              <BOXIMAGE  src={LOGO} />
            </IMAGEBOX>

            <BOX></BOX>
          </BOXOFSIDE>
          <BOXOFSIDEBAR>
            <BOX>
              {" "}
              <h2>My NAME is Nirakar</h2>{" "}
            </BOX>
            <BOX>
              <h5 style={{ color: "black" }}>i am a debveloper,this are my topic</h5>
            </BOX>
          </BOXOFSIDEBAR>
        </SIDEBARFLEXBOX>
      </div>
    );
}

export default side;
 