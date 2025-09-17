"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImageUrl";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "product"] | order(_createdAt desc){
      _id,
      title,
      name,
      slug,
      image,
      parentCategory->{title}
    }`;

    client
      .fetch(query)
      .then((data) => {
        setProducts(data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-5">Loading products...</p>;
  if (products.length === 0)
    return <p className="text-center py-5">No products found.</p>;

  return (
    <div className="container py-3">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-3 col-md-6 col-12" key={product._id}>
            <div className="mad-product h-100 d-flex flex-column">
              {/* Product Image */}
              <div className="mad-product-image">
                <Image
                  src={urlFor(product.image).width(500).url()}
                  alt={product.title || product.name || "Product"}
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Product Info */}
              <div className="mad-product-description mt-auto">
                {product.parentCategory?.title && (
                  <Link href="#" className="mad-product-cat">
                    {product.parentCategory.title}
                  </Link>
                )}
                <h3 className="mad-product-title">
                  <Link
                    href={`/product/${product.slug?.current}`}
                    className="mad-link"
                  >
                    {product.title}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
