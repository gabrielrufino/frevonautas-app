import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'
import BottomNavigator from '../components/BottomNavigator'
import ExpeditionImage from '../components/ExpeditionImage'

export default function Question() {
  const [text, setText] = useState('')
  const [responses, setResponses] = useState([
    {
      id: 1,
      text: ''
    },
    {
      id: 2,
      text: ''
    },
    {
      id: 3,
      text: ''
    },
    {
      id: 4,
      text: ''
    },
  ])

  return (
    <>
      <Header />
      <div className="my-5" />
      <ExpeditionImage
        img="https://frevonautas.mybluemix.net/images/terra"
        title="Terra"
        small
      />


      <Container>
        <h4 className="text-secondary">Agora vamos pôr em prática o que aprendemos</h4>
      </Container>

      <BottomNavigator selected="expeditions" />
    </>
  )
}
