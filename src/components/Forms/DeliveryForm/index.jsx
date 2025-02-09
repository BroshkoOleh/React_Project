import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../CustomInput";
import { clearCart } from "../../../redux/slices/cartSlice";
import { closeModal } from "../../../redux/slices/modalSlice";
import styles from "./DeliveryForm.module.scss";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age number is required"),
  address: Yup.string().required("Address is required"),
  mobNumber: Yup.string().required("Phone number is required"),
});

export default function DeliveryForm() {
  const navigate = useNavigate();
  const successfulNotify = () =>
    toast.success("Your order has been accepted. Wait for a call to confirm your details", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.productsCart);

  const saveToLsOnChange = (value, name, setValue, values) => {
    const updatedValues = { ...values, [name]: value };
    localStorage.setItem("formData", JSON.stringify(updatedValues));
    setValue(value);
  };

  const getInitialValue = () => {
    const storedValues = localStorage.getItem("formData");
    return storedValues
      ? JSON.parse(storedValues)
      : {
          firstName: "",
          lastName: "",
          age: "",
          address: "",
          mobNumber: "",
        };
  };

  const handleSubmit = (values) => {
    dispatch(clearCart());

    localStorage.removeItem("formData");

    dispatch(closeModal("formModal"));
    successfulNotify();
  };

  return (
    <>
      <Formik
        initialValues={getInitialValue()}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
          navigate("/");
        }}
      >
        {({ values }) => {
          // console.log(values);

          return (
            <Form>
              <CustomInput
                name="firstName"
                label="First Name"
                id="firstName"
                placeholder="First Name"
                customChange={(value, name, setValue) =>
                  saveToLsOnChange(value, name, setValue, values)
                }
              />

              <CustomInput
                name="lastName"
                label="Last Name"
                id="lastName"
                placeholder="Last Name"
                customChange={(value, name, setValue) =>
                  saveToLsOnChange(value, name, setValue, values)
                }
              />
              <CustomInput
                name="age"
                label="Age"
                id="age"
                placeholder="Age"
                customChange={(value, name, setValue) =>
                  saveToLsOnChange(value, name, setValue, values)
                }
              />
              <CustomInput
                name="address"
                label="Address"
                id="address"
                placeholder="Address"
                customChange={(value, name, setValue) =>
                  saveToLsOnChange(value, name, setValue, values)
                }
              />
              <CustomInput
                maskChar="_"
                name="mobNumber"
                label="Phone"
                id="mobNumber"
                placeholder="Phone"
                mask="+380 (99) 999-9999"
                customChange={(value, name, setValue) =>
                  saveToLsOnChange(value, name, setValue, values)
                }
              />
              <button type="submit" className={styles.formBtn}>
                Buy
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
