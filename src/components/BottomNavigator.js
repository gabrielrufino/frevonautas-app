import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import { faBookOpen, faGamepad, faBell, faCog } from '@fortawesome/free-solid-svg-icons'

import './BottomNavigator.css'

export default function BottomNavigator({selected}) {
  return (
    <Row className="bottom-navigator fixed-bottom text-option text-center pt-3">
      <Col className={selected === 'expeditions' ? 'text-light' : ''}>
        <FontAwesomeIcon size="lg" icon={faBookOpen} />
      </Col>
      <Col className={selected === 'games' ? 'text-light' : ''}>
        <FontAwesomeIcon size="lg" icon={faGamepad} />
      </Col>
      <Col className={selected === 'notifications' ? 'text-light' : ''}>
        <FontAwesomeIcon size="lg" icon={faBell} />
      </Col>
      <Col className={selected === 'settings' ? 'text-light' : ''}>
        <FontAwesomeIcon size="lg" icon={faCog} />
      </Col>
    </Row>
  )
}
