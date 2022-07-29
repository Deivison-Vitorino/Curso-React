import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 300px;
  border-radius: 5px;
  background-color: #222;
  color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  > img {
    max-width: 90%;
    height: 200px;
    border-radius: 5px;
  }
`;
export const CardPostContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  gap: 20px;

  .button-15 {
    background-image: linear-gradient(#42a1ec, #0070c9);
    border: 1px solid #0077cc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    direction: ltr;
    display: block;
    font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.022em;
    line-height: 1.47059;
    min-width: 30px;
    overflow: visible;
    padding: 4px 15px;
    text-align: center;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
  }

  .button-15:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .button-15:hover {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }

  .button-15:active {
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #006dbc;
    outline: none;
  }

  .button-15:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;
export const ButtonReset = styled.button`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;
