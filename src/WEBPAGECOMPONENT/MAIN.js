import React from 'react';
import {FLEXBOX} from "../component/componetn"
import MAINSIDE from "../webcomponent/maincontent"
import SIDEBAR from "../webcomponent/side"
import styled, { css } from "styled-components";
import {IMAGEBOX,BOX}  from "../component/componetn" 

const MAINFLEXBOX = styled(FLEXBOX)`
  width: 100%;
  padding: 0.5rem;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0px;
  }
`;

const NEWBOX = styled(BOX)`

  @media (max-width: 720px) {
width:100%;
padding:0rem;
  }
`;

const NEWSIDEBAR = styled(BOX)`

width:30%;
  @media (max-width: 720px) {
  width:100%;
  }
`;

const MAIN = () => {
    return (
      <div>
        <MAINFLEXBOX >
          <NEWSIDEBAR width="30">
            
              <SIDEBAR />
            
          </NEWSIDEBAR>
          <NEWBOX  width="70">
            <MAINSIDE/>
          </NEWBOX>
        </MAINFLEXBOX>
      </div>
    );
};

export default MAIN;
