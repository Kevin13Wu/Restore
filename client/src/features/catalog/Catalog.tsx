import type { Product } from "../../app/models/product";

type Props = {
  products: Product[];
};

export default function Catalog({ products }: Props) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
