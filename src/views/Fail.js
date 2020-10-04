import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import './Fail.css'

export default function Success() {
  const history = useHistory()

  return (
    <Container className="success">
      <div className="py-4" />
      <h3 className="text-white py-5 text-center">Não foi dessa vez, viajante.</h3>
      <div className="py-4" />
      <Button block onClick={() => history.goBack()}>Tentar novamente</Button>
      <div className="py-4" />
      <h3 className="text-white py-5 text-center">Recomendamos que olhe os conteúdos adicionais</h3>
    </Container>
  )
}
