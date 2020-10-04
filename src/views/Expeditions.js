import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

import BottomNavigator from '../components/BottomNavigator'
import ExpeditionCard from '../components/ExpeditionCard'
import Header from '../components/Header'

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState([])
  const [search, setSearch] = useState([])

  return (
    <>
      <Header />

      <Container className="pt-5 mt-5">
        <Form onSubmit={event => event.preventDefault()}>
          <Form.Group>
            <Form.Control
              value={search}
              placeholder="Busca"
              onChange={event => setSearch(event.target.value)}
            />
          </Form.Group>
        </Form>

        <h2 className="text-4F6977">Expedições: </h2>
        <hr />

        <ExpeditionCard
          img="https://frevonautas.mybluemix.net/images/terra"
          name="Tecnologias"
          description="A NASA e inovações cotidianas"
        />

        <ExpeditionCard
          img="https://frevonautas.mybluemix.net/images/terra"
          name="Tecnologias"
          description="A NASA e inovações cotidianas"
        />

      </Container>

      <BottomNavigator selected="expeditions" />
    </>
  )
}
