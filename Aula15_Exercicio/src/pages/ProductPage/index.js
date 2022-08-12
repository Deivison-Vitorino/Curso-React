
import { NavLink } from "react-router-dom";
import CardItem from "../../components/CardItem";
import { ProductsContainer } from "./style";

export default function ProductsPage(props) {
  return (
    <ProductsContainer>
      <NavLink to={'/cart'} style={{width:'100%'}}> <button> Carrinho </button></NavLink>
      <NavLink to={"/"} style={{width:'100%'}} > <button> Home </button>  </NavLink>
      {props.listaProdutos.map((item) => {
        return (
          <div key={item.id}>
            <CardItem item={item} addToCart={props.adicionar} />
          </div>
        );
      })}
    </ProductsContainer>
  );
}
