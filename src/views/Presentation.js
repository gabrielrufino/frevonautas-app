import React, {useState, useEffect} from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Splash from '../components/Splash'
import './Presentation.css'

export default function Presentation() {
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
    <div className="presentation h-100">
      {showSplash && (
        <Splash src={splashImage} />
      )}

      {!showSplash && (
        <Carousel className="h-100">
          <Carousel.Item className="p-5 h-100">
            <h3 className="text-white">
              Vamos juntos conhecer nosso planeta...
            </h3>

            <img
              className="d-block w-100 my-4"
              src="https://frevonautas.mybluemix.net/images/astronauta"
              alt="Astronauta"
            />

            <h3 className="text-white text-right">
              E nos aventurar através das histórias da NASA
            </h3>
          </Carousel.Item>
          <Carousel.Item className="p-5 h-100">
            <h4 className="text-white">
              Finalize as expedições e participe dos nossos games com seus amigos
            </h4>

            <img
              className="d-block w-100 my-4"
              src="https://frevonautas.mybluemix.net/images/astronauta-1"
              alt="Astronauta"
            />

            <h4 className="text-white text-right">
              Assim irá acumular pontos e avançar de nível
            </h4>
          </Carousel.Item>
          <Carousel.Item className="p-5 h-100">
            <h4 className="text-white">
              Pronto para se aventurar?
            </h4>

            <div className="py-5 my-5" />
            <Button variant="outline-light" block onClick={() => history.push('/entrada')}>
              COMEÇAR
            </Button>
            <div className="py-5 my-5" />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  )
}
