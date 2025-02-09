import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Wrapper from "./components/Wrapper";
import Header from "./components/header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import { fetchProduct } from "./redux/slices/productSlice";
import ShowTableContextProvider from "./context/showTableContext/ShowTableContextProvider";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <ShowTableContextProvider>
      <Wrapper>
        <Header />

        <AppRoutes />

        <Footer />
      </Wrapper>
    </ShowTableContextProvider>
  );
}

export default App;
