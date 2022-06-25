import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";

// import axios from "axios";

// import products from "../products";

function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    // console.log("use effect triggered");
    // async function fetchProducts() {
    //   const { data } = await axios.get("/api/products/");
    //   console.log("data", data);
    //   setProducts(data);
    // }
    // fetchProducts();

    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Latest Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error}></Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
