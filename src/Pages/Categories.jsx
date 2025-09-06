import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";
import SEO from "../Component/SEO";

// ================= Category Sidebar =================
function CategorySidebar({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "category"] | order(title asc){
      _id,
      title,
      "slug": slug.current
    }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setCategories(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCategories([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-lg-3 col-md-4 mb-4 shop1-sidebar">
      <div className="category-sidebar cat-side mb-30 sticky-sidebar">
        <h3 className="cat-title">Categories</h3>
        <div className="category-item">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <li>
                <button
                  onClick={() => onCategorySelect(null)}
                  className="btn p-0 d-flex align-items-center gap-2"
                >
                  <span>→</span> All Products
                </button>
              </li>
              {categories.map((c) => (
                <li key={c._id}>
                  <button
                    onClick={() => onCategorySelect(c.slug)}
                    className="btn p-0 d-flex align-items-center gap-2"
                  >
                    <span>→</span> {c.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// ================= Product Card =================
function ProductCard({ product }) {
  const imgUrl = product?.image?.asset?.url;

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
      <div className="product-03-wrapper pos-rel text-center">
        <div className="product-02-img pos-rel overflow-hidden rounded">
          <Link to={`/product/${product.slug?.current}`}>
            {imgUrl ? (
              <img
                src={imgUrl}
                alt={product.title || product.name}
                className="img-fluid product-img-hover prod-img"
              />
            ) : (
              <div
                style={{
                  minHeight: "200px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <h4>{product.title || "No Image"}</h4>
              </div>
            )}
          </Link>
        </div>

        <div className="product-text mt-2">
          <h5>{product.name}</h5>
          <h4>
            <Link to={`/product/${product.slug?.current}`}>
              {product.title}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

// ================= Main Page =================
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryName = selectedCategory || "All Products";

  useEffect(() => {
    let query = `*[_type == "product"] | order(_createdAt desc){
      _id,
      title,
      name,
      slug,
      image{ asset->{url, altText} },
      parentCategory->{title, "slug": slug.current}
    }`;

    if (selectedCategory) {
      query = `*[_type == "product" && defined(parentCategory) && parentCategory->slug.current == $cat] | order(_createdAt desc){
        _id,
        title,
        name,
        slug,
        image{ asset->{url, altText} },
        parentCategory->{title, "slug": slug.current}
      }`;
    }

    setLoading(true);
    sanityClient
      .fetch(query, selectedCategory ? { cat: selectedCategory } : {})
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
        setLoading(false);
      });
  }, [selectedCategory]);

  // SEO settings
  const seoTitle = `Bluestar Surgical House | ${categoryName}`;
  const seoDescription = selectedCategory
    ? `Explore ${categoryName} at Bluestar Surgical House in Kathmandu, Nepal. High-quality surgical instruments and medical equipment.`
    : "Browse all medical and surgical products at Bluestar Surgical House, Kathmandu. Top brands and trusted medical equipment.";

  const seoUrl = selectedCategory
    ? `https://bluestarsurgicalhouse.com.np/categories/${selectedCategory}`
    : "https://bluestarsurgicalhouse.com.np/categories";

  return (
    <main className="container pt-50 pb-50">
      {/* ✅ SEO */}
      <SEO title={seoTitle} description={seoDescription} url={seoUrl} />

      <div className="row">
        {/* Sidebar */}
        <CategorySidebar onCategorySelect={setSelectedCategory} />

        {/* Products */}
        <div className="col-lg-9 col-md-8">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="row">
              {products.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          /* Sidebar sticky fix */
          .sticky-sidebar {
            position: sticky;
            top: 100px;
            align-self: flex-start;
          }

          /* Sidebar responsive */
          .shop1-sidebar {
            flex: 0 0 25%;
            max-width: 25%;
          }

          @media (max-width: 991px) {
            .shop1-sidebar {
              flex: 0 0 100%;
              max-width: 100%;
              margin-bottom: 20px;
            }
          }

          /* Product hover zoom */
          .product-img-hover {
            transition: transform 0.3s ease;
          }
          .product-img-hover:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </main>
  );
}
