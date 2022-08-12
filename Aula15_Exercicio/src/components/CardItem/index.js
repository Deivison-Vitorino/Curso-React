import { CardItemContainer } from "./style";

export default function CardItem(props) {
  return (
    <CardItemContainer>
      <img src={props.item.src.small} alt={props.item.alt} />
      <h5>{props.item.photographer}</h5>
      <p>
        29,99
      </p>

      <button onClick={() => props.addToCart(props.item)}>Comprar</button>
    </CardItemContainer>
  );
}
