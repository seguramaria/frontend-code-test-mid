import { Product as ProductInterface } from '../../types';

export default function Product() {
  const product: ProductInterface = {
    id: 1,
    name: 'Energy saving light bulb',
    power: '25W',
    description:
      'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
    price: 1299,
    quantity: 4,
    brand: 'Philips',
    weight: 77,
    height: 12.6,
    width: 6.2,
    length: 6.2,
    model_code: 'E27 ES',
    colour: 'Cool daylight',
    img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
  };
  return (
    <div>
      <section>
        <div style={{ width: '100px' }}>
          <img src={product.img_url} style={{ width: '100%' }} />
        </div>
        <h1>{product.name}</h1>
        <p>
          {product.power} // Packet of {product.quantity}
        </p>
      </section>
      <section>
        <div style={{ display: 'flex' }}>
          <div>{product.price}</div>
          <div>
            <button>-</button> 0 <button>+</button>
          </div>
        </div>
        <button>Add to cart</button>
      </section>
      <section>
        <h4>Description</h4>
        <p>{product.description}</p>
      </section>
      <section>
        <h4>Specifications</h4>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>Brand</div>
            <div>Item weight (g)</div>
            <div>Dimensions (cm)</div>
            <div>Item Model Number</div>
            <div>Colour</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{product.brand}</div>
            <div>{product.weight}</div>
            <div>{product.height}</div>
            <div>{product.model_code}</div>
            <div>{product.colour}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
