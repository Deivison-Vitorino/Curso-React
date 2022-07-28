import React from "react";
import {imagemContain} from './style'

const Header = (props) => {
  return (
    <imagemContain>
      <img src={props.logo} alt="logo Header"/>
    </imagemContain>
  );
};
export default Header;
