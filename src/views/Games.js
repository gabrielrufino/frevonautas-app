import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import BottomNavigator from '../components/BottomNavigator'
import Header from '../components/Header'

export default function Games() {
  const history = useHistory()

  return (
    <>
      <Header />
      <div className="mt-5 pt-5" />

      <Container>
        <Button variant="outline-dark" size="lg">
          Ranking
        </Button>

        <div className="p-3">
          <img src="https://frevonautas.mybluemix.net/games/player" className="w-100" alt="Card do astronauta" />
        </div>

        <h5 className="text-4F6977">Games: </h5>

        <Row className="mb-5">
          <Col xs={6} onClick={() => history.push('/app/games/mito-ou-verdade')}>
            <img className="w-100" src="https://frevonautas.mybluemix.net/games/game-1" alt="Game 1" />
            <h6>Mito ou verdade</h6>
          </Col>
          <Col xs={6}>
            <img className="w-100" src="https://frevonautas.mybluemix.net/games/game-2" alt="Game 2" />
            <h6>Quiz em dupla</h6>
          </Col>
          <Col xs={6}>
            <img className="w-100" src="https://frevonautas.mybluemix.net/games/game-3" alt="Game 3" />
            <h6>Quiz em grupo</h6>
          </Col>
        </Row>
      </Container>

      <BottomNavigator selected="games" />
    </>
  );
}
