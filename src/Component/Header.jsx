import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import sanityClient from "../sanityClient";
import bslogo from "../assets/img/logo/BLUESTAR.png";
import NavbarItem from "./Navbarmenu";
import MobileMenu from "./MobileMenu";

// ✅ Lazy load pages
const Home = lazy(() => import("../Pages/Home"));
const Contact = lazy(() => import("../Pages/Contact"));
const About = lazy(() => import("../Pages/About"));
const Order = lazy(() => import("../Pages/Ordernow"));
const ProductDescription = lazy(() => import("../Pages/productdiscription"));
const ProductsWithCategory = lazy(() => import("../Pages/AllProducts"));
const CategorySidebar = lazy(() => import("../Pages/Categories"));
const SearchPage = lazy(() => import("../Pages/Search"));

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch brands
    sanityClient
      .fetch(`*[_type == "brand"]{ _id, title, "slug": slug.current }`)
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));

    // Fetch categories with subcategories, brands, and products
    sanityClient
      .fetch(
        `
        *[_type=="category"]{
          _id,
          title,
          "slug": slug.current,
          "subcategories": *[_type=="subcategory" && parentCategory._ref == ^._id]{
            _id,
            title,
            "slug": slug.current,
            "brands": *[_type=="brand" && parentSubcategory._ref == ^._id]{
              _id,
              title,
              "slug": slug.current,
              "products": *[_type=="product" && brand._ref == ^._id]{
                _id,
                title,
                "slug": slug.current
              }
            }
          },
          "brands": *[_type=="brand" && parentCategory._ref == ^._id && !defined(parentSubcategory)]{
            _id,
            title,
            "slug": slug.current,
            "products": *[_type=="product" && brand._ref == ^._id]{
              _id,
              title,
              "slug": slug.current
            }
          }
        }
      `
      )
      .then((data) => setCategories(data || []))
      .catch((err) => console.error(err));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // ✅ Show sticky navbar only after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300); // Show sticky navbar after 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section>
        <header>
          {/* 🔹 Top header (always visible) */}
          <div className="header-top-area pl-165 pr-165">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-6">
                  <div className="header-top-wrapper">
                    <div className="header-top-info d-none d-xl-block f-left">
                      <span>
                        <i className="fas fa-heart" /> Welcome to Bluestar
                        Surgical House. We provide medical accessories
                      </span>
                    </div>
                    <div className="header-link f-left">
                      <span>
                        <a
                          href="https://wa.me/9779851078417?text=Hello%20I%20want%20to%20inquire"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp" /> +977
                          9851078417
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="header-top-right text-md-right">
                    <div className="shop-menu">
                      <a
                        href="mailto:info@bluestarsurgicalhouse.com.np"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#4E97FD] hover:underline"
                      >
                        <IoMdMail />
                        info@bluestarsurgicalhouse.com.np
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-menu-area menu-01 pl-165 pr-165">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-3 col-lg-3">
                  <div className="logo">
                    <Link to="/">
                      <img
                        className="logoimage1 logoimg2"
                        src={bslogo}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="col-xl-9 col-lg-9 d-none d-lg-block">
                  <div className="header-right f-right">
                    <div className="header-search f-right d-none d-xl-block">
                      <form
                        className="header-search-form"
                        onSubmit={handleSearchSubmit}
                      >
                        <input
                          placeholder="Search Product.."
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="main-menu">
                    <nav
                      id="mobile-menu"
                      className={mobileMenuOpen ? "open" : ""}
                    >
                      <ul>
                        <li>
                          <NavLink
                            to="/"
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="navbar-item">
                          <NavLink
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                            to="/categories"
                            className="navbar-link"
                          >
                            Categories
                          </NavLink>
                          {categories.length > 0 && (
                            <ul className="sub-menu">
                              {categories.map((cat) => (
                                <NavbarItem
                                  key={cat.slug || cat._id}
                                  item={{ ...cat, _type: "category" }}
                                />
                              ))}
                            </ul>
                          )}
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                          >
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products"
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                          >
                            Products
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/order"
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                          >
                            Order Now
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                              color: isActive ? "#0077B6" : "#555555",
                            })}
                          >
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu categories={categories} />
              </div>
            </div>
          </div>

          <div
            id="sticky-header"
            className={`main-menu-area menu-01 pl-165 pr-165 ${
              showSticky ? "visible" : "hidden"
            }`}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-3 col-lg-3">
                  <div className="logo">
                    <Link to="/">
                      <img
                        className="logoimage1 logoimg2"
                        src={bslogo}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="col-xl-9 col-lg-9 d-none d-lg-block">
                  <div className="header-right f-right">
                    <div className="header-search f-right d-none d-xl-block">
                      <form
                        className="header-search-form"
                        onSubmit={handleSearchSubmit}
                      >
                        <input
                          placeholder="Search"
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="main-menu">
                    <nav
                      id="mobile-menu"
                      className={mobileMenuOpen ? "open" : ""}
                    >
                      <ul>
                        <li>
                          <NavLink
                            to="/"
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="navbar-item">
                          <NavLink
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                            to="/categories"
                            className="navbar-link"
                          >
                            Categories
                          </NavLink>
                          {categories.length > 0 && (
                            <ul className="sub-menu">
                              {categories.map((cat) => (
                                <NavbarItem
                                  key={cat.slug || cat._id}
                                  item={{ ...cat, _type: "category" }}
                                />
                              ))}
                            </ul>
                          )}
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                          >
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products"
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                          >
                            Products
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/order"
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                          >
                            Order Now
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                              color: isActive ? "#007BFF" : "#333333",
                              textDecoration: "none",
                            })}
                          >
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu categories={categories} />
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Routes */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<ProductsWithCategory />} />
          <Route path="/categories" element={<CategorySidebar />} />
          <Route path="/product/:slug" element={<ProductDescription />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Header;
