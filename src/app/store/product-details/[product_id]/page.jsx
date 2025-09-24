import Container from "@/components/home/Container";
import { getProducts } from "@/library";
import styles from "@/styles/product-details/ProductDetails.module.css";
import AddToCartButton from "@/components/product/AddToCartButton";

export default async function ProductDetails({ params }) {
  const product = await getProducts(params.product_id);

  return (
    <Container className="col-span-4">
      <div className="py-12 px-4">
        <div className="flex flex-col md:flex-row items-start bg-white">
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              
              className={`${styles.productImage} w-md object-cover`}
            />
          </div>
          <div className="p-8 md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600 leading-relaxed h-[150px] overflow-clip">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-gray-900">
              Price: <span className="text-blue-600">${product.price}</span>
            </p>

            {product.discount && (
              <p className="text-md text-red-500 font-medium">
                Discount: {product.discount}% off
              </p>
            )}

            <ul className="text-gray-700 space-y-1 text-sm">
              <li>
                <strong>Rating:</strong> {product.rating?.rate} ⭐
              </li>
              <li>
                <strong>Reviews:</strong> {product.rating?.count}
              </li>
              {/* <li>
                <strong>Color:</strong> {product.color}
              </li> */}
              <li>
                <strong>Category:</strong> {product.category}
              </li>
            </ul>
            <div className="p-1">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
