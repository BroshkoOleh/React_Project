import React from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

export default function Modal({ title, firstTextButton, handleProduct = () => {} }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal("cardModal"));
    }
  };
  const cardModal = useSelector((state) => state.modal.cardModal);
  const modalData = useSelector((state) => state.modal.modalData);

  const dispatch = useDispatch();

  return (
    cardModal && (
      <div className={styles.modalWrapper}>
        <div onClick={handleBackgroundClick} className={styles.background}>
          <div className={styles.content}>
            <span
              onClick={() => {
                dispatch(closeModal("cardModal"));
              }}
              className={styles.closeIcon}
            >
              &times;
            </span>

            <p className={styles.title}>{title}</p>
            <div className={styles.productImg}>
              <img src={modalData.imgUrl} alt="img" />
            </div>

            <p className={styles.description}>
              you chose the book "{modalData.name}" written by {modalData.author} which costs $
              {modalData.price}
            </p>
            <div className={styles.modalBtns}>
              <button
                className={styles.modalBtn}
                onClick={() => {
                  dispatch(handleProduct(modalData));
                  dispatch(closeModal("cardModal"));
                }}
              >
                {firstTextButton}
              </button>
              <button
                className={styles.modalBtn}
                onClick={() => {
                  dispatch(closeModal("cardModal"));
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired, 
  firstTextButton: PropTypes.string.isRequired, 
  handleProduct: PropTypes.func, 
};
