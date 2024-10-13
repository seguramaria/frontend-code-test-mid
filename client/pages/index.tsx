import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo-client";
import { Product as ProductInterface } from "@/types/index";
import ProductsList from "@/components/ProductsList/ProductsList";

const GET_ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      power
      quantity
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
        <h2>Products</h2>
        <ProductsList products={products} />
      </div>
    </main>
  );
}
