import React from "react";
import styles from "./ProductListCards.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card";
import PropTypes from "prop-types";

export default function ProductListCards({ productsData = [] }) {
  const products = useSelector((state) => state.products?.data || []);

  return (
    <ul className={styles.cardsGallery}>
      {productsData.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </ul>
  );
}

// Додайте цей блок після компонента
ProductListCards.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      price: PropTypes.number,
      imgUrl: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};
