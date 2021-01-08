import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({
  product: { image, _id, name, rating, numReviews, price },
}) {
  return (
    <Card className="my-3 p-3 rouded" style={{ borderRadius: '10px' }}>
      <a href={`/product/${_id}`}>
        <Card.Img src={image} variant="top" style={{ borderRadius: '10px' }} />
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as="div">
            {' '}
            <b>{name}</b>{' '}
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {rating} from {numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h4">${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
