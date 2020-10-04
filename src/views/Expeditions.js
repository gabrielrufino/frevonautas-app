import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Form } from 'react-bootstrap'

import BottomNavigator from '../components/BottomNavigator'
import ExpeditionCard from '../components/ExpeditionCard'
import Header from '../components/Header'

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState([])
  const [search, setSearch] = useState([])

  useEffect(function () {
    axios
      .get('https://frevonautas.mybluemix.net/expedicoes')
      .then(({ data }) => {
        setExpeditions(data.expedicoes)
      })
      .catch(function () {
        alert('Houve um erro inesperado')
      })
  }, [])

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


        {expeditions.map(expedition => (
          <ExpeditionCard
            key={expedition.name}
            img={expedition.image}
            name={expedition.name}
            description={expedition.description}
          />
        ))}
      </Container>

      <BottomNavigator selected="expeditions" />
    </>
  )
}
