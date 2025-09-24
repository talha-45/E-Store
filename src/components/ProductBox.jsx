import styles from "@/styles/productbox.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductBox({ product }) {
  return (
    <div
      className={`${styles.card} bg-white p-4 m-1 rounded-lg shadow-lg`}
    >
      <Link href={"/store/product-details/" + product.id}>
        <Image
  width={300}
  height={150}
  src={product.image ?? "/placeholder.png"}
  alt={product.title ?? "Product"}
  className="w-full h-48 object-contain rounded-md"
  unoptimized
/>

      </Link>

      <div className="mt-4">
        <h3
          className="text-sm font-semibold text-gray-800 h-[40px] overflow-hidden"
        >
          {product.title}
        </h3>
        <p className="text-gray-900 font-semibold mt-2">${product.price}</p>
        <button
          className="flex mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
