import Link from "next/link";
import {
  BasketIcon,
  BasketIconButton,
  HeaderWrapper,
  PageHeader,
  Logo,
} from "./Header.styles";
import ShoppingBasket from "@/components/ShoppingBasket/ShoppingBasket";
import { useState } from "react";

export default function Header() {
  const [isBasketOpen, setBasketOpen] = useState(false);
  const toggleBasket = () => setBasketOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      <PageHeader>
        <Link href="/" passHref>
          <Logo src="/octopus-logo.svg" alt="Logo" />
        </Link>
        <BasketIconButton onClick={toggleBasket}>
          <BasketIcon src="/basket.svg" />
        </BasketIconButton>
        <ShoppingBasket isOpen={isBasketOpen} toggleBasket={toggleBasket} />
      </PageHeader>
    </HeaderWrapper>
  );
}
