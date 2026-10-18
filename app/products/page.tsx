"use client";

import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  return (
    <>
      <h1>Products</h1>
      <button onClick={() => router.push("/products/10")}> products 10</button>
    </>
  );
};

export default Products;
