import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../Component/SEO";
import bgImage from "../assets/img/bg/04.jpg";
import { FaDownload, FaCheckCircle } from "react-icons/fa";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).url();

function ProductDescription() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product data from Sanity
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && slug.current == $slug][0]{
          title,
          name,
          image{asset->{_id,url}},
          catalogPdf{asset->{url}},
          features,
          description
        }`,
        { slug }
      )
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  // SEO and structured data
  const seoTitle = `Bluestar Surgical House | ${product.title}`;
  const seoDescription =
    product.description ||
    `Buy ${product.title} at Bluestar Surgical House, Kathmandu. High-quality surgical instruments and medical equipment.`;
  const seoUrl = `https://bluestarsurgicalhouse.com.np/product/${slug}`;
  const seoImage =
    product.image?.asset?.url ||
    "https://bluestarsurgicalhouse.com.np/logo.png";

  // PDF download handler
  const handleDownload = async () => {
    if (!product.catalogPdf?.asset?.url) return;
    try {
      const response = await fetch(product.catalogPdf.asset.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "catalog.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={seoUrl}
        image={seoImage}
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          image: seoImage,
          description: seoDescription,
          brand: {
            "@type": "Brand",
            name: "Bluestar Surgical House",
          },
          offers: {
            "@type": "Offer",
            url: seoUrl,
            availability: "https://schema.org/InStock",
          },
        })}
      </script>

      {/* Breadcrumb */}
      <div
        className="breadcrumb-area pt-125 pb-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-text">
              <h2>{product.title}</h2>
            </div>
            <ul className="breadcrumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">&gt; Products</Link>
              </li>
              <li>
                <span>&gt; {product.title}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container pt-50 pb-50">
        <div className="row">
          {/* Product Image */}
          <div className="col-xl-4 col-lg-4 mb-30">
            <div
              className="product-img d-flex align-items-center justify-content-center"
              style={{
                minHeight: "200px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              {product.image?.asset?.url ? (
                <img
                  src={urlFor(product.image.asset)}
                  alt={product.title}
                  className="img-fluid"
                />
              ) : (
                <h4 className="text-muted">{product.title}</h4>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-xl-8 col-lg-8">
            <div className="product-list-content mb-30">
              <div className="product-text">
                <h1>{product.name || product.title}</h1>
                <p>
                  {product.description || "High-quality surgical equipment."}
                </p>
              </div>

              {/* Features */}
              {product.features?.length > 0 && (
                <div className="mt-3">
                  <h3>Key Features:</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-start mb-2 gap-2"
                        itemProp="feature"
                      >
                        <FaCheckCircle
                          className="text-success flex-shrink-0"
                          size={18}
                          style={{ marginTop: "3px" }}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "650" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PDF Download / View */}
              {product.catalogPdf?.asset?.url && (
                <div className="mt-4 flex gap-3">
                  <a
                    href={product.catalogPdf.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-btn"
                  >
                    View Catalog
                  </a>
                  <button onClick={handleDownload} className="c-btn">
                    Download Catalog PDF <FaDownload />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
