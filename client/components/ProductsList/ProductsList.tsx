import { List } from "./ProductsList.styles";
import { Product } from "@/types/index";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  if (!products) return <h5>No products available.</h5>;
  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
}
