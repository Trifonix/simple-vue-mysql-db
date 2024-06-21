```
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
```

```
CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

```
INSERT INTO products (name, price)
VALUES
    ('Товар 1', ROUND(RAND() * 100, 2)),
    ('Товар 2', ROUND(RAND() * 100, 2)),
    ('Товар 3', ROUND(RAND() * 100, 2)),
    ('Товар 4', ROUND(RAND() * 100, 2)),
    ('Товар 5', ROUND(RAND() * 100, 2));
```