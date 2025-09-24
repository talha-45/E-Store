"use client";
import { useState, createContext, useContext } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import styles from "@/styles/header.module.css";
import NavBar from "./NavBar";

// Context for state
const MobileMenuContext = createContext();

export function MobileMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function Toggle() {
  const { menuOpen, setMenuOpen } = useContext(MobileMenuContext);
  return (
    <button onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
    </button>
  );
}

export function Dropdown() {
  const { menuOpen } = useContext(MobileMenuContext);

  if (!menuOpen) return null;

  return (
    <div className="md:hidden bg-white shadow px-5 py-4 space-y-4">
      <form
       action="/store"
       method="GET"
       className={`flex items-center ${styles.searchBar}`}>
        <input
          type="text"
          name="search"
          placeholder="Search for product..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FiSearch size={18} />
        </button>
      </form>
      <NavBar mobile />
    </div>
  );
}
