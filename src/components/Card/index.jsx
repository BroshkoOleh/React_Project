import React from "react";
import styles from "../styles/MainStyles.module.scss";
import StarIcon from "../svg/StarIcon";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slices/productSlice";
import { openModal, setModalData } from "../../redux/slices/modalSlice";

function Card({ item = {} }) {
  const dispatch = useDispatch();

  return (
    <ul className={styles.cardsGallery}>
      <li className={styles.card}>
        <div className={styles.cardContent}>
          <div
            className={`${styles.iconContainer} ${item.isFavorite ? styles.favorite : ""} `}
            onClick={() => {
              dispatch(toggleFavorite(item.id));
            }}
          >
            <StarIcon />
          </div>
          <a href="#" className={styles.cardContentLink}>
            <img className={styles.img1} src={item.imgUrl}></img>
          </a>

          <h2 className={styles.cardContentTitle}>{item.name}</h2>
          <p className={styles.cardContentAuthor}>{item.author}</p>
          <p className={styles.cardContentPrice}>{item.price} &#8364;</p>
          <button
            onClick={() => {
              dispatch(openModal("cardModal"));
              dispatch(setModalData(item));
            }}
            type="button"
            className={styles.cardContentBtn}
          ></button>
        </div>
      </li>
    </ul>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
export default Card;
