import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import axios from "axios";

// import products from "../products";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("use effect triggered");
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      console.log("data", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
