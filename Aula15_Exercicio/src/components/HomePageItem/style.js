import styled from "styled-components";

export const StyleItem = styled.div`

div {

    background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
    border: 0;
    border-radius: 12px;
    color: #FFFFFF;
    width: 50%;
    bottom: 0;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.0;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5),
  -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5),
   .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
   &:hover {
      transform: scale(1.1); 
      box-shadow: 0 1px 1px rgba(0,0,0,0.6);
  }
}
`;

export const Texto = styled.p`

    font-weight: bold;
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        touch-action: manipulation;
`;