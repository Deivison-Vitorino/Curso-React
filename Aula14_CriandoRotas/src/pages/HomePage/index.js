import { useState } from "react";
import CreatePage from "../CreatePage";
import UpDatePage from "../UpDatePage";
import { MainContain } from "./style";
import {NavLink} from "react-router-dom";
export default function HomePage() {
  
  const [showPage, setShowPage] = useState("new");

  return (
    <MainContain>
      <NavLink to={"/create"} >Criar nova tag</NavLink>
      <NavLink to={"/update"} >Atualizar tag</NavLink>      
    </MainContain>
  );
}
