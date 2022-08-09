import styled from "styled-components";
export const MainContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;
  height: 100vh;
  width: 100vw;
  label > input {
    display: block;
    box-sizing: border-box;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: 0.16px;
    border-radius: 0;
    outline: 2px solid transparent;
    outline-offset: -2px;
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #8d8d8d;
    background-color: #f4f4f4;
    padding: 0 16px;
    color: #161616;
    transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
      outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
    :focus {
      outline: 2px solid #0f62fe;
      outline-offset: -2px;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
    border-radius: 6px;
    border: none;

    background: #6e6d70;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5),
      0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: #dfdedf;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    cursor: pointer;

    &:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1px rgba(0, 0, 0, 0.1),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }
  }
`;

export const ListaWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  vertical-align: baseline;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: 0.16px;
  border-radius: 5px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #8d8d8d;
  background-color: #f4f4f4;
  padding: 0 16px;
  color: #161616;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
    outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  :focus {
    outline: 2px solid #0f62fe;
    outline-offset: -2px;
  }
`;
export const ListaContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  background-color: black;
  color: white;
  width: 60%;
  border-radius: 5px;
  padding: 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
