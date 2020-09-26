import React from "react";
import "../static/css/CheckoutProduct.css";
import { useStateValue } from "../api/StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct" key={props.id}>
      <img src={props.image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
