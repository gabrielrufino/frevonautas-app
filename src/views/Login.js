import React, {useState, useCallback} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import BigHeader from '../components/BigHeader'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const onSignIn = useCallback(function (event) {
    event.preventDefault()

    history.push('/app')
  }, [history])

  return (
    <div>
      <BigHeader>
        <img
          src="https://frevonautas.mybluemix.net/images/logo-sem-fundo"
          height="80px"
          alt="Logo do App"
        />
      </BigHeader>

      <div className="my-4 py-4" />

      <Container>
        <Form onSubmit={onSignIn}>
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="astronauta@gmail.com"
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="**********"
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Entrar
          </Button>
        </Form>
      </Container>
    </div>
  )
}
