import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type Product from "./Product"; 
import { useTheme } from "../themeContext/useTheme"; 
import styles from "./ProductsPage.module.css"; 

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  return (
    
    <div
      className={`${styles.pageContainer} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <header className={styles.header}>
        <h2>Детали товара: {product?.title || "Загрузка..."}</h2>
       
        <button onClick={toggleTheme} className={styles.themeToggleBtn}>
          Переключить на {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>

      {product && (
        <div className={styles.productDetailsCard}>
          <div style={{ marginBottom: "10px" }}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div>Цена: ${product.price.toFixed(2)}</div>
          <div>Категория: {product.category}</div>
          <div> Описание: {product.description}</div>
          <div>
            {" "}
            Рейтинг: {product.rating.rate} (отзывов: {product.rating.count})
          </div>

          <Link to="/products" className={styles.backLink}>
            К списку товаров
          </Link>
        </div>
      )}
    </div>
  );
}
