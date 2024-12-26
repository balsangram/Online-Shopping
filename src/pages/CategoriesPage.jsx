import React, { useState } from "react";
import { Categories, TypeProduct } from "../Root";

function CategoriesPage() {
  const [product, setProduct] = useState("");
  // console.log(ptoduct);

  return (
    <>
      <div className="CategoriesPage">
        <Categories setProduct={setProduct} />
        <TypeProduct getProduct={product} />
      </div>
    </>
  );
}

export default CategoriesPage;
