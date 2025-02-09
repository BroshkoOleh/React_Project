import React from "react";
import styles from "../../styles/MainStyles.module.scss";
import PropTypes from "prop-types";
import { selectTotalPrice } from "../../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function WrapperShopCard({ children, cartProducts = [] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = useSelector(selectTotalPrice);

  const warningNotify = () =>
    toast.warn("Please add a product in Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  return (
    <main className={styles.mainContent}>
      <section className={`${styles.container}`}>
        <button className={styles.chatBtn}></button>
        <h2 className={styles.title}>Added goods to cart</h2>

        <div className={styles.line}></div>
        <div className={styles.shoppingContent}>
          {cartProducts.length === 0 && (
            <p className={styles.statusCart}>The Cart is empty. Please add a product.</p>
          )}
          <ul className={styles.orderCardGallery}> {children}</ul>

          <div className={styles.cardSummary}>
            <p className={styles.title}>Total</p>
            <p className={styles.totalPrice}>
              <span>Order amount</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </p>
            <button
              className={styles.orderBtn}
              type="button"
              onClick={() => {
                if (cartProducts.length === 0) {
                  warningNotify();
                  navigate("/");
                } else {
                  dispatch(openModal("formModal"));
                }
              }}
            >
              Make an order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
WrapperShopCard.propTypes = {
  children: PropTypes.node,

  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
