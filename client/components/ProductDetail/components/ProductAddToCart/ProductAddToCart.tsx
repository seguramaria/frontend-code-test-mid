import { Product } from "@/types/index";
import {
  AddToCartSection,
  ProductQuantity,
  QuantityCaption,
  QuantityButton,
  AddToCartButton,
  PriceQuantitySection,
  QuantitySection,
  QuantityPicker,
  Popover,
} from "./ProductAddToCart.styles";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "@/pages/_app";

export default function ProductAddToCart({ product }: { product: Product }) {
  const { addToBasket, basketItems, basket } = useContext(BasketContext);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");

  useEffect(() => {
    if (basket?.length > 0) {
      basket?.find((basketProduct: Product) => {
        if (basketProduct.id === product.id && basketProduct?.currentQuantity)
          setCurrentQuantity(basketProduct.currentQuantity);
      });
    }
  }, [basket]);

  const formattedPrice = (priceInCents: number) => {
    return (priceInCents / 100).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  const handleAddToBasket = () => {
    const productInBasket = basket?.find(
      (basketProduct: Product) => basketProduct.id === product?.id
    );

    if (productInBasket?.currentQuantity !== currentQuantity) {
      setPopoverMessage(
        productInBasket
          ? `Product quantity successfully updated ${currentQuantity}x`
          : `Product successfully added ${currentQuantity}x`
      );
    } else {
      return null;
    }
    addToBasket(product, currentQuantity);
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 3000);
  };

  return (
    <AddToCartSection>
      <PriceQuantitySection>
        <span>{formattedPrice(product.price)}</span>
        <QuantitySection>
          <QuantityCaption>Qty</QuantityCaption>
          <QuantityPicker>
            <QuantityButton
              onClick={() => {
                if (currentQuantity > 1) {
                  setCurrentQuantity(currentQuantity - 1);
                }
              }}
              disabled={currentQuantity === 1}
            >
              -
            </QuantityButton>
            <ProductQuantity>
              <span title="Current quantity">{currentQuantity}</span>
            </ProductQuantity>
            <QuantityButton
              onClick={() => setCurrentQuantity(currentQuantity + 1)}
            >
              +
            </QuantityButton>
          </QuantityPicker>
        </QuantitySection>
      </PriceQuantitySection>
      {showPopover && (
        <Popover>
          <p>{popoverMessage}</p>
          {/* <p>
            Items in basket: <span title="Basket items"> {basketItems}</span>
          </p> */}
        </Popover>
      )}
      <AddToCartButton onClick={handleAddToBasket}>Add to cart</AddToCartButton>
      <p>
        Items in basket: <span title="Basket items"> {basketItems}</span>
      </p>
    </AddToCartSection>
  );
}
