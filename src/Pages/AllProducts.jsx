import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";
import bgImage from "../assets/img/bg/04.jpg"; // background image
import { IoIosArrowForward } from "react-icons/io";

export default function ProductsWithCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "product"] | order(_createdAt desc){
      _id,
      title,
      name,
      slug,
      image{ asset->{url, altText} },
      brand->{title},
      parentCategory->{title}
    }`;
    sanityClient
      .fetch(query)
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-area pt-125 pb-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-text">
              <h1>All Products</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <span>
                    {">"}
                    {"  "}All Products
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container pt-50 pb-50">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-30"
                key={product._id}
              >
                <div className="product-02-wrapper pos-rel text-center">
                  {/* Product Image or Placeholder */}
                  <div className="product-02-img pos-rel">
                    <Link to={`/product/${product.slug?.current}`}>
                      {product.image?.asset?.url ? (
                        <img
                          src={product.image.asset.url}
                          alt={
                            product.image.altText ||
                            product.title ||
                            product.name ||
                            "Product"
                          }
                          className="img-fluid prod-img"
                        />
                      ) : (
                        <div
                          className="product-placeholder d-flex align-items-center justify-content-center"
                          role="img"
                          aria-label={product.title || product.name}
                          style={{
                            minHeight: "200px",
                            background: "#f8f9fa",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            padding: "1rem",
                          }}
                        >
                          <h4 className="text-muted">{product.title}</h4>
                        </div>
                      )}
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="product-text mt-2">
                    <h5>{product.name}</h5>
                    <h4>
                      <Link to={`/product/${product.slug?.current}`}>
                        {product.title}
                      </Link>
                    </h4>
                    {product.brand && (
                      <p className="text-muted">{product.brand.title}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
