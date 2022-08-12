import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePageItem from "../../components/HomePageItem";
import { ButonContainer } from "./style";


export default function HomePage() {
  return (
    <ButonContainer>
      
      <NavLink to={"/products"}>
        <Header/>
      </NavLink>
      <HomePageItem/>
      <Footer/>
    </ButonContainer>
  );
}
