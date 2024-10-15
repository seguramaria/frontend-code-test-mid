import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo-client";
import ProductsList from "@/components/ProductsList/ProductsList";
import Head from "next/head";
import { Product } from "@/types/index";

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

export async function getServerSideProps() {
  const client = createApolloClient();

  try {
    const { data } = await client.query({ query: GET_ALL_PRODUCTS });
    return {
      props: {
        products: data.allProducts,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default function Home({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>Octopus Energy: Switch to affordable renewable energy</title>
        <meta
          name="description"
          content="Octopus Energy offers 100% renewable energy plans in Texas. Get affordable electricity plans backed by technology and innovation. Join us today!"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <div className="home">
          <h1>Products</h1>
          <ProductsList products={products} />
        </div>
      </main>
    </>
  );
}
