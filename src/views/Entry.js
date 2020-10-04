import React, {useEffect, useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import BigHeader from '../components/BigHeader'
import Splash from '../components/Splash'

import './Entry.css'

export default function Entry() {
  const [splashImage, setSplashImage] = useState('https://frevonautas.mybluemix.net/images/nasa')
  const [showSplash, setShowSplash] = useState(true)

  const history = useHistory()

  useEffect(function () {
    setTimeout(function () {
      setSplashImage('https://frevonautas.mybluemix.net/images/frevonautas')

      setTimeout(function () {
        setShowSplash(false)
      }, 3000)
    }, 3000)
  }, [])

  return (
    <div className="entry">
      {showSplash && (
        <Splash src={splashImage} />
      )}

      {!showSplash && (
        <>
          <BigHeader>
            <h3 className="text-light">Bem vindo ao AppNASA</h3>
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
        </>
      )}
    </div>
  )
}
