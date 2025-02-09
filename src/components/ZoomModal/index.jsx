import React from "react";
import styles from "./ZoomModal.module.scss";
import PropTypes from "prop-types";
import ModalWrapper from "../ModalWrapper";
import { useSelector } from "react-redux";

export default function ZoomModal({}) {
  const modalData = useSelector((state) => state.modal.modalData);
  const zoomModal = useSelector((state) => state.modal.zoomModal);
  return (
    <ModalWrapper modal={zoomModal}>
      <div className={styles.imageWrapper}>
        <img src={modalData.imgUrl} alt="img" />
      </div>
    </ModalWrapper>
  );
}
