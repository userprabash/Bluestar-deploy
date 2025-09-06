import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ categories }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMenu = (menuKey) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleSubmenu = (slug) => {
    setOpenSubmenus((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const renderNestedItems = (items, type = "category") => {
    return items.map((item) => {
      const hasChildren =
        (item.subcategories && item.subcategories.length > 0) ||
        (item.brands && item.brands.length > 0) ||
        (item.products && item.products.length > 0);

      const isProduct = type === "product";

      return (
        <li key={item.slug || item._id}>
          <div className="menu-item">
            {isProduct ? (
              // ✅ Products navigate
              <Link
                to={`/product/${item.slug}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ) : (
              // ✅ Categories / Subcategories / Brands only expand/collapse
              <span
                className="menu-toggle"
                onClick={() => toggleSubmenu(item.slug)}
              >
                {item.title}
              </span>
            )}

            {hasChildren && (
              <span
                className="expand-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSubmenu(item.slug);
                }}
              >
                {openSubmenus[item.slug] ? "−" : "+"}
              </span>
            )}
          </div>

          {hasChildren && openSubmenus[item.slug] && (
            <ul className="nested-menu">
              {item.subcategories &&
                renderNestedItems(item.subcategories, "subcategory")}
              {item.brands && renderNestedItems(item.brands, "brand")}
              {item.products && renderNestedItems(item.products, "product")}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className="mobile-menu-wrapper d-lg-none"
      style={{ position: "relative" }}
    >
      {/* Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu-container ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu">
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleMenu("categories")}>
              <span>Categories</span>
              <span className="expand-icon">
                {openMenu === "categories" ? "−" : "+"}
              </span>
            </div>

            {openMenu === "categories" && (
              <ul className="nested-menu">{renderNestedItems(categories)}</ul>
            )}
          </li>
          <li>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={() => setMobileMenuOpen(false)}>
              Order Now
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .mobile-menu-toggle {
          position: absolute;
          top: -70px;
          right: 20px;
          font-size: 37px;
          font-weight: 700;
          cursor: pointer;
          background: transparent;
          border: none;
          z-index: 1000;
          color: black;
        }

        /* Smooth dropdown container */
        .mobile-menu-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 1.4s ease-in-out;
        }

        .mobile-menu-container.open {
          max-height: 1900px; /* enough height for your menu */
        }

        .mobile-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          background: #0c1923;
          border-top: 1px solid #222;
          position: relative;
          z-index: 999;
        }

        .mobile-menu li {
          border-bottom: 1px solid #222;
        }

        .mobile-menu li a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
        }

        .mobile-menu li a:hover {
          background: #111;
          color: #4e97fd;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          cursor: pointer;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          position: relative;
        }

        .menu-item:hover {
          background: #111;
          color: #4e97fd;
        }

        .expand-icon {
          background: rgba(255, 255, 255, 0.1);
          border: solid 1px rgba(255, 255, 255, 0.2);
          border-width: 0 0 1px 1px;
          font-weight: 700;
          height: 27px;
          width: 26px;
          text-align: center;
          line-height: 25px;
          cursor: pointer;
          color: #fff;
        }

        .nested-menu {
          list-style: none;
          padding-left: 15px;
          margin: 0;
          background: #111;
        }

        .nested-menu li {
          border-bottom: 1px solid #222;
        }

        .nested-menu li a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          font-size: 14px;
          color: #ccc;
        }

        .nested-menu li a:hover {
          color: #4e97fd;
        }
      `}</style>
    </div>
  );
};

export default MobileMenu;
