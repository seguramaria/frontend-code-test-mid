import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import createApolloClient from "@/lib/apollo-client";
import { GetServerSidePropsContext } from "next";
import { Product } from "@/types/index";
import Head from "next/head";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createApolloClient();
  const { id } = context.params!;

  try {
    const { data } = await client.query({
      query: GET_PRODUCT,
      variables: { id },
    });

    return {
      props: {
        product: data.Product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default function ProductDetailPage({ product }: { product: Product }) {
  const router = useRouter();
  const isFallback = router?.isFallback;

  if (isFallback) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>
          {`${product.name} | Octopus Energy | We're doing energy better - for
      you and the environment.`}
        </title>
        <meta name="description" content={product.description} />
      </Head>
      <main>
        <div>
          <ProductDetail product={product} />
        </div>
      </main>
    </>
  );
}
