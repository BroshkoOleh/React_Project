import React from "react";
import styles from "../styles/MainStyles.module.scss";
import PropTypes from "prop-types";

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
