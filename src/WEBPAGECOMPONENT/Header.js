import LOGO from "../webcomponent/logo"
import NAVIGATION from "../webcomponent/navigationbar"  
import styled, { css } from "styled-components";
import SEACRCHBOX from "../webcomponent/searchbox"
import DEVICE from "../component/resizecomponent"
import {FLEXBOX,BOX,BUTTON,INPUT} from "../component/componetn"
import {faUserCircle,faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React from 'react';

const NAVBUTTON = styled(BUTTON)`
  background-color: ${(props) => props.bg};
  margin: 4px;
  padding:4px;
`;
const ABOUTBUTTON = styled(BUTTON)`
  background-color: ${(props) => props.bg};
  margin-left: 9px;
  
`;
const NAVBOX = styled(BOX)`
  position: absolute;
  min-width: 100%;
  z-index: 10;
  top: 46px;
  left: 0px;
  display: none;

  @media (max-width: 750px) {
    min-width: 95%;
  }

`;

const RESNEWVIGATION = styled(NAVIGATION)`
  display: none;
  @media (min-width: 750px) {
  };
`;
const BARSBUTTON = styled(BOX)`
  @media (min-width: 750px) {
    display: none;
  }

  &:hover {
    ${NAVBOX} {
      display: block;
    }
  }
`;
const RSPONCESEACRCHBOX = styled(INPUT)`
  width: 100%;
  height: 38px;
  margin-right: 10px;
  display: none;
  @media (min-width: 450px) {
    display: block;
  }
`; 
const NEWNEV = styled(BOX)`  
  display: none;
  height:38px;
 margin-bottom:12px;
 
  @media (min-width: 750px) {
    display: block;
  }
`;


const Header = () => {
    return (
      <div>
        <FLEXBOX column="column" width="100">
          {/* down code is fore dries row of header which is inclde lOGO and icon  */}
          <FLEXBOX width="100">
            <FLEXBOX size="3">
              <BARSBUTTON size="4">
                <NAVBUTTON bg="gray" radius="100">
                  <FontAwesomeIcon color="black" size="2x" icon={faBars} />
                </NAVBUTTON>
                <NAVBOX>
                  {" "}
                  <NAVIGATION />{" "}
                </NAVBOX>
              </BARSBUTTON>

              <LOGO size="6" />
            </FLEXBOX>
            <BOX size="4">
              <FLEXBOX>
                <BOX size="5">
                  <RSPONCESEACRCHBOX />
                </BOX>
                <NEWNEV size="5">
                  <RESNEWVIGATION />
                </NEWNEV>
              </FLEXBOX>
            </BOX>
            <FLEXBOX size="3">
              <BOX size="7">
                <ABOUTBUTTON style={{ height: "40px" }} radius="20">
                  ABOt US
                </ABOUTBUTTON>
              </BOX>

              <BOX size="3">
                <NAVBUTTON bg="gray" radius="100">
                  <FontAwesomeIcon
                    color="black"
                    size="2x"
                    icon={faUserCircle}
                  />
                </NAVBUTTON>
              </BOX>
            </FLEXBOX>
          </FLEXBOX>
          {/* down linke is for seach box  */}

          <SEACRCHBOX />
        </FLEXBOX>
      </div>
    );
}

export default Header;

