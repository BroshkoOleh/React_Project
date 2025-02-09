import React from "react";
import styles from "./ModalForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import DeliveryForm from "../Forms/DeliveryForm";

export default function ModalForm() {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal("formModal"));
    }
  };
  const formModal = useSelector((state) => state.modal.formModal);

  const dispatch = useDispatch();

  return (
    formModal && (
      <div className={styles.modalWrapper}>
        <div onClick={handleBackgroundClick} className={styles.background}>
          <div className={styles.content}>
            <span
              onClick={() => {
                dispatch(closeModal("formModal"));
              }}
              className={styles.closeIcon}
            >
              &times;
            </span>

            <h2 className={styles.title}>Personal Data for Delivery</h2>
            <DeliveryForm />

            {/* <button
            className={styles.modalBtn}
            onClick={() => {
              dispatch(closeModal("formModal"));
            }}
          >
            Buy
          </button> */}
          </div>
        </div>
      </div>
    )
  );
}
