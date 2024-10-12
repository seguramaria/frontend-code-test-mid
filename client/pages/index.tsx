import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo-client";
import { Product as ProductInterface } from "@/types/index";

const GET_ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      power
      price
    }
  }
`;

export default function Home() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await createApolloClient.query({
          query: GET_ALL_PRODUCTS,
        });
        setProducts(data.allProducts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h2>Available Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Power: {product.power}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
