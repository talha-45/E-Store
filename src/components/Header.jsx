import styles from "@/styles/header.module.css";
import Container from "./home/Container";
import { FiSearch } from "react-icons/fi";
import NavBar from "./NavBar";
import { MobileMenuProvider, Toggle, Dropdown } from "./MobileMenu";

export default function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <MobileMenuProvider>
        <Container className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-pink-500 font-bold text-4xl">
              E-Store<b className="text-black">.</b>
            </span>
          </div>
          <form 
          action="/store"
          method="GET"
          className={`hidden md:flex items-center ${styles.searchBar}`}>
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

          <div className="hidden md:block">
            <NavBar />
          </div>
          <div className="block md:hidden">
            <Toggle />
          </div>
         
        </Container>
        <Dropdown />
      </MobileMenuProvider>
    </header>
  );
}
