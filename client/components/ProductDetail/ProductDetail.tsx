import { Product } from "@/types/index";
import {
  AddToCartSection,
  ImageContainer,
  PageContainer,
  ProductQuantity,
  QuantityCaption,
  ProductBody,
  ProductSubtitle,
  ProductTitle,
  SectionPrimary,
  SectionSecondary,
  ProductInfo,
  ProductSpecification,
  ProductColumn,
  QuantityButton,
  AddToCartButton,
  PriceQuantitySection,
  QuantityControl,
  QuantityStepper,
  Popover,
} from "./ProductDetail.styles";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "@/pages/_app";

export default function ProductDetail({
  product,
}: {
  product: Product | null;
}) {
  if (!product) return <p>Product not found</p>;
  const { addToBasket, basketItems, basket } = useContext(BasketContext);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");

  useEffect(() => {
    if (basket?.length > 0) {
      basket.find((basketProduct: Product) => {
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
    const productInBasket = basket.find(
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
    <PageContainer>
      <SectionPrimary>
        <ImageContainer>
          <img src={product.img_url} />
        </ImageContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductInfo>
          {product.power} // Packet of {product.quantity}
        </ProductInfo>
        <AddToCartSection>
          <PriceQuantitySection>
            <span>{formattedPrice(product.price)}</span>
            <QuantityControl>
              <QuantityCaption>Qty</QuantityCaption>
              <QuantityStepper>
                <QuantityButton
                  onClick={() => {
                    if (currentQuantity > 1) {
                      setCurrentQuantity(currentQuantity - 1);
                    }
                  }}
                  disabled={currentQuantity < 1}
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
              </QuantityStepper>
            </QuantityControl>
          </PriceQuantitySection>
          {showPopover && (
            <Popover>
              <p>{popoverMessage}</p>
              <p>
                Items in basket:{" "}
                <span title="Basket items"> {basketItems}</span>
              </p>
            </Popover>
          )}

          <AddToCartButton onClick={handleAddToBasket}>
            Add to cart
          </AddToCartButton>
        </AddToCartSection>
      </SectionPrimary>
      <div>
        <SectionSecondary>
          <ProductSubtitle>Description</ProductSubtitle>
          <ProductBody>{product.description}</ProductBody>
        </SectionSecondary>
        <SectionPrimary>
          <ProductSubtitle>Specifications</ProductSubtitle>
          <ProductSpecification>
            <ProductColumn>
              <ProductBody>Brand</ProductBody>
              <ProductBody>Item weight (g)</ProductBody>
              <ProductBody>Dimensions (cm)</ProductBody>
              <ProductBody>Item Model Number</ProductBody>
              <ProductBody>Colour</ProductBody>
            </ProductColumn>
            <ProductColumn>
              <ProductBody>{product.brand}</ProductBody>
              <ProductBody>{product.weight}</ProductBody>
              <ProductBody>
                {product.height} x {product.width} x{product.length}
              </ProductBody>
              <ProductBody>{product.model_code}</ProductBody>
              <ProductBody>{product.colour}</ProductBody>
            </ProductColumn>
          </ProductSpecification>
        </SectionPrimary>
      </div>
    </PageContainer>
  );
}
