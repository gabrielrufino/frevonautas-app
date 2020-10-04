import React from 'react'
import { Button, Container } from 'react-bootstrap'

import './Success.css'

export default function Success() {
  return (
    <Container className="success">
      <div className="py-4" />
      <h3 className="text-white py-5 text-center">Parabéns, viajante!</h3>
      <div className="text-center my-5">
        <img alt="Recompensa" src="https://frevonautas.mybluemix.net/images/recompensa" className="w-50" />
      </div>
      <div className="py-4" />
      <Button block>Recolher recompensa</Button>
    </Container>
  )
}
