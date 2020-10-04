import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'
import BottomNavigator from '../components/BottomNavigator'

export default function Notifications() {
  return (
    <>
      <Header />

      <div className="mt-5 pt-5" />
      <Container>
        Notificações
      </Container>

      <BottomNavigator selected="notifications" />
    </>
  )
}
