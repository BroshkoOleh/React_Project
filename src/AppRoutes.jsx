import React from "react";
import GeneralPage from "./pages/GeneralPage";
import ShoppingPage from "./pages/ShoppingPage";
import WishlistPage from "./pages/WishlistPage";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GeneralPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
    </Routes>
  );
}
