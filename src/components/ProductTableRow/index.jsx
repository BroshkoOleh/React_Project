import React from "react";
import styles from "./ProductTableRow.module.scss";
import StarIcon from "../svg/StarIcon";
import Basket from "../svg/Basket";
import ZoomIcon from "../svg/Zoom";
import { toggleFavorite } from "../../redux/slices/productSlice";
import { openModal, setModalData } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux"; // Додано useSelector
import PropTypes from "prop-types";

const ProductTableRow = ({ product = {} }) => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.productsCart);
  const cartProduct = cartProducts.find((item) => item.id === product.id);
  return (
    <tr className={styles.tableRow}>
      <td>
        <img
          src={product.imgUrl}
          alt={product.nameCard}
          className={styles.productImage}
          onClick={() => {
            dispatch(openModal("zoomModal"));
            dispatch(setModalData(product));
          }}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.price}$</td>
      <td>{product.author}</td>
      <td>{cartProduct ? cartProduct.quantity : 0}</td>

      <td className={styles.actionBtns}>
        <button
          onClick={() => {
            dispatch(openModal("zoomModal"));
            dispatch(setModalData(product));
          }}
        >
          <ZoomIcon />
        </button>
        <button
          onClick={() => {
            dispatch(toggleFavorite(product.id));
          }}
        >
          <StarIcon fill={product.isFavorite ? "goldenrod" : "black"} />
        </button>
        <button
          onClick={() => {
            dispatch(openModal("cardModal"));
            dispatch(setModalData(product));
          }}
          type="button"
        >
          <Basket />
        </button>
      </td>
    </tr>
  );
};

ProductTableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    author: PropTypes.string,
    isFavorite: PropTypes.bool,
    nameCard: PropTypes.string,
  }).isRequired,
};

export default ProductTableRow;
