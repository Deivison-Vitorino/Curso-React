import { NavLink } from "react-router-dom";
import CardBuy from "../../components/CardBuy";
import { CartContainer } from "./style";


export default function CartPage(props) {
  console.log({props})
  return (
    <CartContainer>
      
      {props.listaCart.map((item) => { 

        return(
          
        <div>
          <CardBuy item={item} removeToCart={props.remover}/>
        </div>
      )})}

      <NavLink to={"/"} > <button>Home</button> </NavLink>

      <NavLink to={"/products"}>
        <button>Continuar Comprando</button>
      </NavLink>

    </CartContainer>
  );
}
