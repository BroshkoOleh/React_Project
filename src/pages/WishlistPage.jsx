import React from "react";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import ShowTableContext from "../context/showTableContext";
import { useContext } from "react";
import ZoomModal from "../components/ZoomModal";
import ProductListTable from "../components/ProductListTable";
import ProductListCards from "../components/ProductListCards";

export default function WishlistPage() {
  const favoriteProducts = useSelector((state) => state.products.favorites);
  const { isShowTable } = useContext(ShowTableContext);

  return (
    <>
      <CardContainer
        title={"Wishlist"}
        statusContainer="The Cart of favorite products is empty. Please add a product."
        products={favoriteProducts}
      >
        {isShowTable ? (
          <ProductListTable productsData={favoriteProducts} />
        ) : (
          <ProductListCards productsData={favoriteProducts} />
        )}
      </CardContainer>
      <Modal
        title="Do you want to add this book to basket?"
        firstTextButton="Add to cart"
        handleProduct={addToCart}
      />
      <ZoomModal />
    </>
  );
}
