import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../components/Header'
import './MythOrTruth.css'

export default function MythOrTruth() {
  return (
    <div className="myth-or-truth">
      <Header />
      <div className="mt-5 pt-5" />

      <Container>
        <h3 className="text-white my-5 text-center">MITO OU VERDADE?</h3>
        <div className="bg-dark text-light p-4 rounded mb-5">
          <h5>Os principais elementos da composição da crosta da terra são o oxigênio e o silício.</h5>
        </div>

        <Row>
          <Col className="p-2">
            <img className="w-100" src="https://frevonautas.mybluemix.net/games/verdade" alt="Verdade" />
          </Col>
          <Col className="p-2">
            <img className="w-100" src="https://frevonautas.mybluemix.net/games/mito" alt="Mito" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
