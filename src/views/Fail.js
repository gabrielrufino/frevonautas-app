import React from 'react'
import { Button, Container } from 'react-bootstrap'

import './Fail.css'

export default function Success() {
  return (
    <Container className="success">
      <div className="py-4" />
      <h3 className="text-white py-5 text-center">Não foi dessa vez, viajante.</h3>
      <div className="py-4" />
      <Button block>Tentar novamente</Button>
      <div className="py-4" />
      <h3 className="text-white py-5 text-center">Recomendamos que olhe os conteúdos adicionais</h3>
    </Container>
  )
}
