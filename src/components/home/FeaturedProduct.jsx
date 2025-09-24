import React from 'react';
import Container from './Container';
import ProductBox from '@/components/ProductBox';

export default async function FeaturedProduct() {
  // function to get products by id range
  const getProductsByRange = async (start, end) => {
    const products = [];
    for (let i = start; i <= end; i++) {
      const res = await fetch(`https://fakestoreapi.com/products/${i}`);
      const data = await res.json();
      products.push(data);
    }
    return products;
  };

  // fetch products id=5 to id=10
  const products = await getProductsByRange(15,18);

  return (
    <div className="p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">
          Featured Product
        </h1>
        <div className="my-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {products.map((prod) => (
            <ProductBox key={prod.id} product={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
}
