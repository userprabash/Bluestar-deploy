import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ item }) => {
  const hasChildren =
    (item.subcategories && item.subcategories.length > 0) ||
    (item.brands && item.brands.length > 0) ||
    (item.products && item.products.length > 0);

  return (
    <li className={hasChildren ? "has-submenu" : ""}>
      <NavLink
        to={
          item._type === "category"
            ? ``
            : item._type === "subcategory"
            ? ``
            : item._type === "brand"
            ? ``
            : item._type === "product"
            ? `/product/${item.slug}`
            : "#"
        }
      >
        {item.title}
      </NavLink>

      {/* Recursive children */}
      {hasChildren && (
        <ul className="sub-menu">
          {/* Subcategories */}
          {item.subcategories?.map((sub) => (
            <NavbarItem key={sub._id} item={{ ...sub, _type: "subcategory" }} />
          ))}

          {/* Brands */}
          {item.brands?.map((brand) => (
            <NavbarItem key={brand._id} item={{ ...brand, _type: "brand" }} />
          ))}

          {/* Products (only for brand) */}
          {item.products?.map((prod) => (
            <NavbarItem key={prod._id} item={{ ...prod, _type: "product" }} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
