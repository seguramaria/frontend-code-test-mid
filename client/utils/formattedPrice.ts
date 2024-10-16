export const formattedPrice = (priceInCents: number) => {
  return (priceInCents / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
};
