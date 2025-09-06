import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Sanity
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
    <main className="product-bg">
      {/* Section Header */}
      <section className="container pt-50 pb-50">
        <div className="row mb-30 align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="section-title mb-30">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 text-md-right">
            <div className="b-button shop-btn s-btn mb-30">
              <Link to="/products">
                View All Products <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="">
            <div className="row">
              {products.map((product) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-30"
                  key={product._id}
                >
                  <div className="product-02-wrapper pos-rel text-center">
                    {/* Product Image / Placeholder */}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
