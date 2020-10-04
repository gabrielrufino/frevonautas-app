import React, { useState } from 'react'
import { Badge, Container } from 'react-bootstrap'

import Header from '../components/Header'
import BottomNavigator from '../components/BottomNavigator'

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: 'Porque existe vida na terra?'
    }
  ])

  return (
    <>
      <Header />
      <div className="mt-5 pt-5" />

      <Container>
        {notifications.map(notification => (
          <Badge className="w-100 py-4 text-left" variant="secondary">
            {notification.text}
          </Badge>
        ))}
      </Container>

      <BottomNavigator selected="notifications" />
    </>
  )
}
