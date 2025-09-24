"use client";
import React, { useEffect, useState } from 'react';
import Container from './Container';
import ProductBox from '@/components/ProductBox';

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=4');
      const data = await response.json();
      console.log(data); 
      setProducts(data); // direct array
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-3 mt-17">
      <Container>
        <h1 className="text-center text-3xl font-bold">
          Recently Added Products
        </h1>
        <div className="my-4 grid grid-cols-2 md:grid-cols-4">
          {products.map((prod) => (
            <ProductBox key={prod.id} product={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
}
