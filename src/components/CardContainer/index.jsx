import React from "react";
import styles from "../styles/MainStyles.module.scss";
import PropTypes from "prop-types";

function CardContainer({ title, statusContainer, children, products = [] }) {
  return (
    <section className={`${styles.container} ${styles.mainContent}`}>
      <button className={styles.chatBtn}></button>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.line}></div>
      {products.length === 0 && <p className={styles.statusCart}>{statusContainer}</p>}

      {children}
    </section>
  );
}
CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      author: PropTypes.string,
      imgUrl: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
  statusContainer: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CardContainer;
