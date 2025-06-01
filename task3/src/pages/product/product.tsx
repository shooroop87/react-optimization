import { useParams } from "react-router-dom";
import { products } from "../../data";
import s from "./product.module.css";
import { useState } from "react";
import { ProductDetails } from "../../components/product-details/product-details";

export const Product = () => {
  const { id } = useParams();
  const [ showDetails, setShowDetails ] = useState(false);

  const product = products.find(p => p.id === id)!;

  return (
    <article className={s.product}>
      <h1>{product?.title}</h1>
      <img className={s.image} alt={product.alt} src={product.src} />
      <p className={s.description}>{product.description}</p>
      <button onClick={() => setShowDetails(!showDetails)}>Подробнее...</button>
      {showDetails && (
          <ProductDetails product={product} />
      )}
    </article>
  )
}

export const Component = Product;