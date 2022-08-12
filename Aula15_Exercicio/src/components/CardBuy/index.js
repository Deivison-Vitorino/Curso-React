import { CardBuyContainer} from "./style";

export default function CardBuy(props) {
  console.log(props)

  return <CardBuyContainer>
    
      <img src={props.item.src.small} alt={props.item.alt}/>    
      <p>29,99</p>
      <p>X{props.item.quantity}</p>
      
      <h5>Valor Total: {parseFloat(props.item.quantity*29,9)}</h5>
      <button onClick={()=>props.removeToCart(props.item)}>Remover</button>
  </CardBuyContainer>;
}
