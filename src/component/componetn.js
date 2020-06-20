import styled, { css } from "styled-components";




const SIZE = {
  sl: "200",
  bg:"3",
  lg:"4" 
}

export const BUTTON = styled.button`
         border-radius: ${(props) => props.radius}px;
     
         color: black;
        

         opacity: ${(props) => props.opacity};
          ${(props) =>
             props.border
               ? css`
                   border: 1px solid black;
                 `
               : "none"};

           ${(props) =>
             props.size === "sl" ? 
             css`
              height: 2rem;
              width:2rem;
             ` : "none"
             
             }
       `;

export const BOX = styled.div`
         width: ${(props) => props.width}%;
         order: ${(props) => props.order};
         ${(props) =>
           props.border
             ? css`
                 border: 1px solid black;
               `
             : "none"};

             
         flex-grow: ${(props) => props.size};
       `;

export const FLEXBOX = styled.div`
         display: flex;
         width: ${(props) => props.width}%;
         flex-direction: ${(props) => props.column};
         align-items: ${(props) => props.align};
         flex-wrap: wrap;
         
         ${(props) =>
           props.border
             ? css`
                 border: 1px solid black;
               `
             : "none"};
       `;


export  const IMAGE = styled.img`
          width: 100%;
          
        `;
  export const StyledLogo = styled.div`
          
         height:100px;
         width:100px;
           margin: 10px 10px;
        
       object-fit:cover;
           background-image: url(${(props) => props.mylogo});
         `;


export const INPUT = styled.input`
         
       `;




export const IMAGEBOX = styled(BOX)`

        

          ${(props) =>
           props.border
             ? css`
                 border: 1px solid black;
               `
             : "none"};
         object-fit: cover;
       `;