import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button, Image } from 'react-bootstrap'
import Rating from '../Rating'
//import products from '../../products'
import axios from 'axios'

export default function ProductScreen({ match }) {
  const [products, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [match])

  const {
    name,
    image,
    rating,
    numReviews,
    price,
    description,
    countInStock,
  } = products

  return (
    <>
      <Link className="btn btn-light" to="/">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          {' '}
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item> Price: ${price}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stats: </Col>
                  <Col>{countInStock > 0 ? 'In Stock' : 'Out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={countInStock === 0 ? true : false}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}
