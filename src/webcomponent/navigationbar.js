import React from "react";
import styled from "styled-components";
import DEVICE from "../component/resizecomponent";
import { BOX, BUTTON, FLEXBOX } from "../component/componetn";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NAVIGATIONBOX = styled(FLEXBOX)`
  border: 1px solid black;

  background-color: ${(props) => props.bg};
  @media ${DEVICE.mobileS} {
    flex-direction: column;
    background-color: black;
  };
   @media (min-width: 750px) {

     align-items:center;
     
   }
 
`;

const NAVBUTTON = styled(BUTTON)`
  background-color: ${(props) => props.bg};

  @media ${DEVICE.mobileS} {
    background-color: gray;
  }
`;




const navigationbar = () => {
  return (
    <NAVIGATIONBOX   bg="gray">
      <BOX style={{ margin: "7px", color: "white" }}>
        <span>LINK</span>
        <NAVBUTTON bg="gray" radius="100">
          <FontAwesomeIcon color="black" size="2x" icon={faAngleDown} />
        </NAVBUTTON>
      </BOX>
      <BOX style={{ margin: "7px", color: "white" }}>
        LINK{" "}
        <NAVBUTTON bg="gray" radius="100">
          <FontAwesomeIcon color="black" size="2x" icon={faAngleDown} />
        </NAVBUTTON>
      </BOX>{" "}
      <BOX style={{ margin: "7px", color: "white" }}>
        LINK{" "}
        <NAVBUTTON bg="gray" radius="100">
          <FontAwesomeIcon color="black" size="2x" icon={faAngleDown} />
        </NAVBUTTON>
      </BOX>
    </NAVIGATIONBOX>
  );
};

export default navigationbar;
