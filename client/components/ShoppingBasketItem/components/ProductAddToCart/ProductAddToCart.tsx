import { Product } from "@/types/index";
import {
  AddToCartSection,
  ProductQuantity,
  QuantityCaption,
  QuantityButton,
  QuantitySection,
  QuantityPicker,
} from "./ProductAddToCart.styles";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";

type Props = { product: Product; productQuantity: number };

export default function ProductAddToCart({ product, productQuantity }: Props) {
  const { increaseQuantity, decreaseQuantity } = useContext(BasketContext);

  return (
    <AddToCartSection>
      <QuantitySection>
        <QuantityCaption>Qty</QuantityCaption>
        <QuantityPicker>
          {productQuantity === 1 ? (
            <QuantityButton
              title="Remove product from cart"
              onClick={(e) => {
                e.stopPropagation();
                decreaseQuantity(product.id);
              }}
              disabled={productQuantity < 1}
            >
              <img src="/delete.svg" alt="remove product from cart" />
            </QuantityButton>
          ) : (
            <QuantityButton
              title="Decrease product quantity"
              onClick={(e) => {
                e.stopPropagation();
                decreaseQuantity(product.id);
              }}
              disabled={productQuantity < 1}
            >
              -
            </QuantityButton>
          )}
          <ProductQuantity>
            <span>{productQuantity}</span>
          </ProductQuantity>
          <QuantityButton
            title="Increase product quantity"
            onClick={(e) => {
              e.stopPropagation();
              increaseQuantity(product.id);
            }}
          >
            +
          </QuantityButton>
        </QuantityPicker>
      </QuantitySection>
    </AddToCartSection>
  );
}
