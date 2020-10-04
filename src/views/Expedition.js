import React, {useState} from 'react'
import { Badge, Container, Row, Col } from 'react-bootstrap'

import BottomNavigator from '../components/BottomNavigator'
import ExpeditionImage from '../components/ExpeditionImage'
import Header from '../components/Header'

export default function Expedition() {
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: 'Descrição do tópico'
    },
    {
      id: 2,
      name: 'O que vamos aprender'
    },
    {
      id: 3,
      name: 'Mais assunto'
    },
    {
      id: 4,
      name: 'Mais assunto'
    },
  ])

  return (
    <>
      <Header />

      <div className="my-5" />
      <ExpeditionImage
        img="https://frevonautas.mybluemix.net/images/terra"
        title="Terra"
      />

      <Container>
        <h6>Tópicos:</h6>

        {topics.map(topic => (
          <div className="my-2">
            <Badge variant="secondary w-100 p-3 text-left">
              <Row>
                <Col>
                  <h5>{topic.name}</h5>
                </Col>
                <Col className="text-right">
                  <h5>{'>>'}</h5>
                </Col>
              </Row>
            </Badge>
          </div>
        ))}
      </Container>

      <BottomNavigator selected="expeditions" />
    </>
  )
}
