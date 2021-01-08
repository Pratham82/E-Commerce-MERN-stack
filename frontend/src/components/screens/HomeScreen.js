import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './../Product'
import products from '../../products'

const HomeScreen = () => {
  console.log(products)
  return (
    <>
      <h3 className="py-4">Latest Products</h3>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
export default HomeScreen
