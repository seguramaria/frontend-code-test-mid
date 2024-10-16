import { renderHook, act } from "@testing-library/react";
import { useBasket } from "@/hooks/useBasket";
import { Product } from "@/types/index";

const mockedProduct = {
  id: 1,
  name: "Energy saving light bulb",
  power: "25W",
  description:
    "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
  price: 10,
  quantity: 4,
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: "E27 ES",
  colour: "Cool daylight",
  img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
  currentQuantity: 2,
};

describe("useBasket", () => {
  test("should load basket from localStorage on mount", () => {
    const initialBasket: Product[] = [mockedProduct];
    localStorage.setItem("shopping-basket", JSON.stringify(initialBasket));

    const { result } = renderHook(() => useBasket());

    expect(result.current.basket).toEqual(initialBasket);
    expect(result.current.basketItems).toBe(2);
    expect(result.current.totalPrice).toBe("20");
  });

  test("should add a product to the basket", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 2);
    });

    expect(result.current.basket).toEqual([{ ...product, currentQuantity: 2 }]);
    expect(result.current.basketItems).toBe(2);
    expect(result.current.totalPrice).toBe("20");
  });

  test("should increase quantity of an existing product", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 2);
      result.current.increaseQuantity(1);
    });

    expect(result.current.basket).toEqual([{ ...product, currentQuantity: 3 }]);
    expect(result.current.basketItems).toBe(3);
    expect(result.current.totalPrice).toBe("30");
  });

  test("should decrease quantity of an existing product", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 2);
    });

    act(() => {
      result.current.decreaseQuantity(1);
    });

    expect(result.current.basket).toEqual([{ ...product, currentQuantity: 1 }]);
    expect(result.current.basketItems).toBe(1);
    expect(result.current.totalPrice).toBe("10");
  });

  test("should remove product when quantity reaches zero", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 1);
      result.current.decreaseQuantity(1);
    });

    expect(result.current.basket).toEqual([]);
    expect(result.current.basketItems).toBe(0);
    expect(result.current.totalPrice).toBe("0");
  });

  test("should save basket to localStorage when it changes", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 2);
    });

    const savedBasket = JSON.parse(
      localStorage.getItem("shopping-basket") || "[]"
    );
    expect(savedBasket).toEqual([{ ...product, currentQuantity: 2 }]);
  });

  test("should return correct product quantity", () => {
    const { result } = renderHook(() => useBasket());
    const product: Product = mockedProduct;

    act(() => {
      result.current.addToBasket(product, 3);
    });

    expect(result.current.getProductQuantity(1)).toBe(3);
    expect(result.current.getProductQuantity(2)).toBe(0);
  });
});
