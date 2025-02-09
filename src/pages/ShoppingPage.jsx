import React from "react";
import ShopCard from "../components/ShoppingPage/ShopCard";
import WrapperShopCard from "../components/ShoppingPage/WrapperShopCard";
import Modal from "../components/Modal";
import ModalForm from "../components/ModalForm";
import { useSelector } from "react-redux";
import { deleteShopCard } from "../redux/slices/cartSlice";

export default function ShoppingPage() {
  const cartProducts = useSelector((state) => state.cart.productsCart);

  return (
    <>
      <WrapperShopCard cartProducts={cartProducts}>
        {cartProducts.map((product) => (
          <ShopCard key={product.id} product={product}></ShopCard>
        ))}
      </WrapperShopCard>

      <Modal
        title="Are you sure you want to delete this product?"
        firstTextButton="Delete"
        handleProduct={deleteShopCard}
      />

      <ModalForm />
    </>
  );
}
