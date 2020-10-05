import React from 'react'
import { Container } from 'react-bootstrap'

import './BigHeader.css'

export default function BigHeader({children}) {
  return (
    <Container className="bg-gradient">
      {children}
    </Container>
  )
}
