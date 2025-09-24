import ProductBox from "@/components/ProductBox";
import { getProducts } from "@/library";

export default async function StorePage({ searchParams }) {
  const search = searchParams?.search || "";
  const products = await getProducts();
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="col-span-4 grid grid-cols-2 gap-5 mt-3 md:grid-cols-3">
      {filtered.map((product) => (
        <ProductBox product={product} key={product.id} />
      ))}

      {filtered.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No products found for "{search}"
        </p>
      )}
    </div>
  );
}
