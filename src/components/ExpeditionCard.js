import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

export default function ExpeditionCard({img, name, description}) {
  return (
    <Card className="mb-2">
      <Card.Img variant="top" height="150px" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <Button size="sm" variant="secondary">
              CONTINUAR
            </Button>
          </Col>

          <Col className="text-right">
            <div>Pontos: 150</div>
            <div>Nível: 3</div>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}
