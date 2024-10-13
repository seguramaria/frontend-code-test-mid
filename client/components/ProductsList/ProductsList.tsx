import { Product as ProductInterface } from "@/types/index";
import Link from "next/link";
import {
  AddToCartButton,
  List,
  ListItem,
  ProductPrice,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from "./ProductsList.styles";

export default function ProductsList({
  products,
}: {
  products: ProductInterface[];
}) {
  if (!products) return null;

  return (
    <List>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} passHref key={product.id}>
          <ListItem>
            <ProductImage
              src="https://i.ibb.co/2nzwxnQ/bulb.png"
              alt={product.name}
            />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductInfo>
              {product.power} // Packet of {product.quantity}
            </ProductInfo>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton>Add to cart</AddToCartButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
