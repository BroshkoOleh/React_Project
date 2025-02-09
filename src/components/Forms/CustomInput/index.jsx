import { useField } from "formik";

import React from "react";
import styles from "./CustomInput.module.scss";
import classNames from "classnames";
import InputMask from "react-input-mask";
// import { InputMask } from "primereact/inputmask";
import PropTypes from "prop-types";

export default function CustomInput({ label, id, placeholder, customChange = null, ...props }) {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div className={classNames(styles.inputWrapper, { [styles.withError]: isError })}>
      <label htmlFor={id}>{label}</label>
      <InputMask
        id={id}
        {...field}
        {...props}
        placeholder={placeholder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => {
          field.onBlur(e);
          e.target.placeholder = placeholder;
        }}
        onChange={(e) => {
          if (customChange) {
            customChange(e.target.value, field.name, helpers.setValue);
          }
          field.onChange(e);
        }}
      />
      {isError && <span className={styles.error}>{meta.error}</span>}
    </div>
  );
}
CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  customChange: PropTypes.func,
  props: PropTypes.object, // Додаткові пропси для InputMask
};
