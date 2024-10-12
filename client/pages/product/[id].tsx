import { useEffect, useState } from "react";
import ProductDetail from "@/components/Product/Product";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import createApolloClient from "@/lib/apollo-client";
import { Product as ProductInterface } from "@/types/index";

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const { data } = await createApolloClient.query({
          query: GET_PRODUCT,
          variables: { id },
        });
        setProduct(data.Product);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <main>
      <div>
        <ProductDetail product={product} />
      </div>
    </main>
  );
}
