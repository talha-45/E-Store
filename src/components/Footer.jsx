// src/components/Footer.jsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">E-Store</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your one-stop shop for all the latest products at unbeatable prices.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-white text-xl"><FaLinkedin /></a>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/store" className="hover:text-white transition">Store</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/category/electronics" className="hover:text-white transition">Electronics</a></li>
            <li><a href="/category/fashion" className="hover:text-white transition">Fashion</a></li>
            <li><a href="/category/home" className="hover:text-white transition">Home & Living</a></li>
            <li><a href="/category/sports" className="hover:text-white transition">Sports</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest offers and products.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md focus:outline-none w-full text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
