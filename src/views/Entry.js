import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import BigHeader from '../components/BigHeader'

import './Entry.css'

export default function Entry() {
  const history = useHistory()

  return (
    <div className="entry">
      <BigHeader>
        <h3 className="text-light">Bem vindo ao Missão Terra</h3>
      </BigHeader>

      <div className="my-5 py-4" />
      <Container>
        <Button variant="secondary" block onClick={() => history.push('/login')}>
          Login
        </Button>

        <Button variant="outline-secondary" block onClick={() => history.push('/cadastro')}>
          Cadastre-se
        </Button>

        <Button variant="flat" block>
          Continuar com o Google
        </Button>
      </Container>
    </div>
  )
}
