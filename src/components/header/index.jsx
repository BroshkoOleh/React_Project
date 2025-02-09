import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Імпортуємо useLocation
import styles from "../styles/MainStyles.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalPrice, selectTotalQuantity } from "../../redux/slices/cartSlice";
import ShowTableContext from "../../context/showTableContext";
import { useContext } from "react";

function Header() {
  const whiteTableImage = "/images/whiteTable.png";
  const whiteCardsImage = "/images/whiteCards.png";
  const navigate = useNavigate();

  const favoriteProducts = useSelector((state) => state.products.favorites);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  const { isShowTable, showTableHandler } = useContext(ShowTableContext);

  const location = useLocation(); // Отримуємо поточний шлях

  // Перевіряємо, чи находимося ми на сторінках GeneralPage або WishlistPage
  const showChangeViewButton = location.pathname === "/" || location.pathname === "/wishlist";

  return (
    <header className={styles.header}>
      <section className={styles.topHeader}>
        <div className={`${styles.topHeaderWrapper} ${styles.container}`}>
          <a href="#" className={styles.logo}>
            bookRead
          </a>

          {/* Умовно рендеримо кнопку */}
          {showChangeViewButton && (
            <button className={styles.changeViewBtn} onClick={showTableHandler}>
              <img src={isShowTable ? whiteCardsImage : whiteTableImage} alt="" />
            </button>
          )}

          <div className={styles.titleBasket}>
            <button type="button" className={styles.star} onClick={() => navigate("/wishlist")}>
              <span className={styles.iconNumber}>{favoriteProducts.length}</span>
            </button>

            <p className={styles.totalPrice}>{totalPrice.toFixed(2)} &#8364;</p>

            <button type="button" className={styles.basket} onClick={() => navigate("/shopping")}>
              <span className={styles.iconNumber}>{totalQuantity}</span>
            </button>
          </div>
        </div>
      </section>
      <nav className={`${styles.navigation} ${styles.container}`}>
        <h2 className={styles.navigationTitle}>Shop by category</h2>
        <ul className={styles.navigationMenu}>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ""}`}
              to="/"
            >
              All goods
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ""}`}
              to="/wishlist"
            >
              Wishlist
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ""}`}
              to="/shopping"
            >
              Shopping
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
