// ProductsPage.tsx

import { useEffect, useState, type JSX } from "react";
import type Product from "./Product";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Lecture/L6/themeContext/useTheme";
import styles from "./ProductsPage.module.css";

export default function ProductsPage(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  const { theme, toggleTheme } = useTheme();

  async function loadProducts(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div
      className={`${styles.pageContainer} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <header className={styles.header}>
        <h1>Список товаров</h1>

        <button onClick={toggleTheme} className={styles.themeToggleBtn}>
          Переключить на {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>

      <ul>
        {products.map((product) => (
          <li className={styles.productItem} key={product.id}>
            <h3>{product.title}</h3>
            <div>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
            <div>Цена: ${product.price.toFixed(2)}</div>
            <div>Категория: {product.category}</div>
            <div>
              Рейтинг: {product.rating.rate} (отзывов: {product.rating.count})
            </div>
            <Link to={String(product.id)} className={styles.productLink}>
              К товару
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
