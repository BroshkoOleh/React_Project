import React, { useState } from "react";
import ShowTableContext from "./index";

export default function ShowTableContextProvider({ children }) {
  const [isShowTable, setIsShowTable] = useState(false);

  const showTableHandler = () => {
    setIsShowTable((prev) => !prev);
  };

  const value = {
    isShowTable,
    showTableHandler,
  };

  return <ShowTableContext.Provider value={value}>{children}</ShowTableContext.Provider>;
}
