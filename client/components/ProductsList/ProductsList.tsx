import { List } from "./ProductsList.styles";
import { Product } from "@/types/index";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
}
