import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import BottomNavigator from '../components/BottomNavigator'
import ExpeditionImage from '../components/ExpeditionImage'
import Header from '../components/Header'

export default function Topic() {
  return (
    <>
      <Header />
      <div className="my-5" />
      <ExpeditionImage
        img="https://frevonautas.mybluemix.net/images/terra"
        title="Terra"
        small
      />

      <Container>
        <h3 className="text-center">História da NASA</h3>

        <Row>
          <Col>
            <Button variant="grey" block>
              Simulador
            </Button>
          </Col>
          <Col>
            <Button className="ml-auto" variant="grey">
              {'>>'}
            </Button>
          </Col>
        </Row>
      </Container>

      <BottomNavigator selected="expeditions" />
    </>
  )
}

