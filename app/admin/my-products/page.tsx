"use client";

import React, { useEffect, useState } from "react";
import { getProductsById } from "./actions";
import ProductCard from "@/components/product-card";

const Products = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [products, setProducts] = useState<any>("");
  useEffect(() => {
    getProductsById(user?._id).then((res) => {
      try {
        res = JSON.parse(res);
        console.log(res);
        setProducts(res);
      } catch (err) {
        console.log(err);
      }
    });
  }, [user?._id]);

  return (
    <div className="text-center p-8">
      {products ? (
        <>
          <h2 className="text-2xl text-left mb-6 font-semibold">My Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products && products.length > 0 ? (
              products.map((product: any, idx: number) => (
                <ProductCard product={product} key={idx} />
              ))
            ) : (
              <div>
                <p>No Products found!</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Products List</h2>
          <p>No products found. Add some products to see them here.</p>
        </>
      )}
    </div>
  );
};

export default Products;
