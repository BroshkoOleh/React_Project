import React from "react";
import styles from "./ProductListTable.module.scss";
import ProductTableRow from "../../components/ProductTableRow";
import PropTypes from "prop-types";

export default function ProductListTable({ productsData = [] }) {
  return (
    <table className={styles.productListTable}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Author</th>

          <th>Count In Basket</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productsData.map((product) => (
          <ProductTableRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

// Додайте цей блок після компонента
ProductListTable.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imgUrl: PropTypes.string,
      author: PropTypes.string,
      countInBasket: PropTypes.number,
      // Додайте інші поля, якщо потрібно
    })
  ).isRequired, // Масив продуктів обов’язковий
};
