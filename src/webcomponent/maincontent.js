import React from 'react';
import styled, { css } from "styled-components";
import LOGO from "/home/bhumika/Desktop/Newwebsitedelet./newwbsite/src/assets/technology_banner_background_02_vector_180749.jpg";
import { BOX, FLEXBOX, IMAGEBOX,IMAGE } from "../component/componetn";

const MAINFLEXBOX = styled(FLEXBOX)`
 padding:1rem;

  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
padding:0rem;

  }
`;
const CONTENTFELXBOX = styled(FLEXBOX)`
  flex-direction: column;
  width: 50%;
 
 
`;


const NEWIMGAEG = styled(IMAGEBOX)`
  @media (min-width: 720px) {
margin:1rem;


  }
`;

 const maincontent = () => {
    return (
      <div>
        {/* main box of maincontetnt inside this boxes we have our actuual card box  */}

        <MAINFLEXBOX align="center">
          <CONTENTFELXBOX>
            <NEWIMGAEG>
              <IMAGE src={LOGO} />
            </NEWIMGAEG>

            <BOX>
              <BOX>
                {" "}
                <h2>THIS IS THE PRODUCT DETALI</h2>{" "}
              </BOX>
              <BOX>
                <h5 style={{ color: "gray" }}>this is the best product </h5>
              </BOX>
            </BOX>
          </CONTENTFELXBOX>
          <CONTENTFELXBOX>
            <NEWIMGAEG>
              <IMAGE src={LOGO} />
            </NEWIMGAEG>
            <br />
            <BOX>
              <BOX>
                {" "}
                <h2>THIS IS THE PRODUCT DETALI</h2>{" "}
              </BOX>
              <BOX>
                <h5 style={{ color: "gray" }}>this is the best product </h5>
              </BOX>
            </BOX>
          </CONTENTFELXBOX>
        </MAINFLEXBOX>
      </div>
    );
}

export default maincontent;
