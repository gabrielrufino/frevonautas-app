import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import { faBookOpen, faGamepad, faBell, faCog } from '@fortawesome/free-solid-svg-icons'

import './BottomNavigator.css'

export default function BottomNavigator() {
  return (
    <Row className="bottom-navigator fixed-bottom text-light text-center pt-3">
      <Col>
        <FontAwesomeIcon size="lg" icon={faBookOpen} />
      </Col>
      <Col>
        <FontAwesomeIcon size="lg" icon={faGamepad} />
      </Col>
      <Col>
        <FontAwesomeIcon size="lg" icon={faBell} />
      </Col>
      <Col>
        <FontAwesomeIcon size="lg" icon={faCog} />
      </Col>
    </Row>
  )
}
