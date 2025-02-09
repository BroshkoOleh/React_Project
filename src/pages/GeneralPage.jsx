import React from "react";
import CardContainer from "../components/CardContainer";
import Modal from "../components/Modal";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlice";
import { useEffect } from "react";
import { addToCart } from "../redux/slices/cartSlice";
import ShowTableContext from "../context/showTableContext";
import { useContext } from "react";
import ProductListTable from "../components/ProductListTable";
import ProductListCards from "../components/ProductListCards";
import ZoomModal from "../components/ZoomModal";

export default function GeneralPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.products.data);

  const { isShowTable } = useContext(ShowTableContext);

  return (
    <>
      <CardContainer
        title="Bestsellers – our most popular items, updated daily"
        statusContainer="The Cart is empty. Please add a product."
        products={products}
      >
        {isShowTable ? <ProductListTable productsData={products}  /> : <ProductListCards productsData={products} />}
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
