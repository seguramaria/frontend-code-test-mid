import Link from "next/link";
import {
  BasketIcon,
  BasketIconButton,
  HeaderWrapper,
  PageHeader,
  Logo,
} from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <PageHeader>
        <Link href="/" passHref>
          <Logo src="/octopus-logo.svg" alt="Logo" />
        </Link>
        <BasketIconButton>
          <BasketIcon src="/basket.svg" />
        </BasketIconButton>
      </PageHeader>
    </HeaderWrapper>
  );
}
