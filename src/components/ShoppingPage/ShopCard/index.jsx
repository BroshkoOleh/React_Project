import React from "react";
import styles from "../../styles/MainStyles.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { openModal, setModalData } from "../../../redux/slices/modalSlice";

import { updateQuantity, handleIncrement, handleDecrement } from "../../../redux/slices/cartSlice";

export default function ShopCard({ product = {} }) {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value === "") {
      dispatch(updateQuantity({ id: product.id, quantity: 0 }));
    } else {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue >= 0) {
        dispatch(updateQuantity({ id: product.id, quantity: numericValue }));
      }
    }
  };

  return (
    <li className={styles.orderCart}>
      <div className={styles.orderCartContent}>
        <a className={styles.imgContainer} href="#">
          <img src={product.imgUrl} alt="photo" />
        </a>
        <div className={styles.orderDescription}>
          <p>{product.name}</p>
          <p>{product.author}</p>
        </div>
        <div className={styles.productCount}>
          <button
            className={styles.buttonCount}
            onClick={() => dispatch(handleDecrement(product.id))}
          >
            -
          </button>
          <input
            type="text"
            className={styles.numberProduct}
            onChange={handleInputChange}
            value={product.quantity === 0 ? "" : product.quantity}
          />

          <button
            className={styles.buttonCount}
            onClick={() => dispatch(handleIncrement(product.id))}
          >
            +
          </button>
        </div>
        <span>X</span>
        <span>{product.price}</span>
        <span>=</span>
        <span>{(product.price * product.quantity).toFixed(2)}€</span>

        <span
          onClick={() => {
            dispatch(openModal("cardModal"));
            dispatch(setModalData(product));
          }}
          className={styles.trashContainer}
        >
          <img src="./images/trashIcon.png" alt="icon" />
        </span>
      </div>
    </li>
  );
}

ShopCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
