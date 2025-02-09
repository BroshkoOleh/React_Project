import React, { Children } from "react";
import styles from "./ModalWrapper.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

export default function ModalWrapper({ children, modal }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal("zoomModal"));
    }
  };

  const dispatch = useDispatch();

  return (
    modal && (
      <div className={styles.modalWrapper}>
        <div onClick={handleBackgroundClick} className={styles.background}>
          <div className={styles.content}>
            <span
              onClick={() => {
                dispatch(closeModal("zoomModal"));
              }}
              className={styles.closeIcon}
            >
              &times;
            </span>
            {children}
          </div>
        </div>
      </div>
    )
  );
}
ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  modal: PropTypes.bool.isRequired,
};
