import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import client from "../sanityClient";

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const data = await client.fetch(
            `*[_type == "product" && title match $searchTerm]{
              _id,
              title,
              price,
              slug, // ✅ Fetch slug from Sanity
              "imageUrl": image.asset->url
            }`,
            { searchTerm: `${searchQuery}*` } // * is for partial matches
          );
          setProducts(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
        setLoading(false);
      };
      fetchProducts();
    }
  }, [searchQuery]);

  if (loading) return <p>Loading...</p>;

  return (
    <>

    <div className="container py-4">
      <h2>Search results for "{searchQuery}"</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-3">
              <div className="card mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>
                    <Link to={`/product/${product.slug.current}`}>
                      {product.title}
                    </Link>
                  </h4>
                  {/* <p>${product.price}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
