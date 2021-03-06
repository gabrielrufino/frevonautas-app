import React from 'react'
import { Container } from 'react-bootstrap'

import BottomNavigator from '../components/BottomNavigator'
import Header from '../components/Header'


export default function Settings() {
  return (
    <>
      <Header />
      <div className="mt-5 pt-5" />

      <Container>
        Configurações
      </Container>

      <BottomNavigator selected="settings" />
    </>
  )
}
