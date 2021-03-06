import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { faArrowLeft, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

export default function Header() {
  const history = useHistory()

  return (
    <div className="header fixed-top shadow-lg">
      <Container>
        <Row>
          <Col className="text-left text-light">
            <div className="mt-2" />
            <FontAwesomeIcon onClick={() => history.goBack()} size="lg" icon={faArrowLeft} />
          </Col>
          <Col className="text-center">
            <div className="mt-3" />
            <img src="https://frevonautas.mybluemix.net/images/logo-sem-fundo" alt="Logo do App" height="50px" />
          </Col>
          <Col className="text-right">
            <div className="mt-5" />
            <div className="bg-light text-primary rounded-circle position-fixed p-3 ml-4">
              <FontAwesomeIcon size="lg" icon={faUserAstronaut} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
