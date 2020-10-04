import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { faBookOpen, faGamepad, faBell, faCog } from '@fortawesome/free-solid-svg-icons'

import './BottomNavigator.css'

export default function BottomNavigator({selected}) {
  return (
    <Row className="bottom-navigator fixed-bottom text-center pt-3">
      <Col>
        <NavLink to="/app" className={selected === 'expeditions' ? 'text-light' : 'text-option'}>
          <FontAwesomeIcon size="lg" icon={faBookOpen} />
        </NavLink>
      </Col>
      <Col>
        <NavLink to="/app/games" className={selected === 'games' ? 'text-light' : 'text-option'}>
          <FontAwesomeIcon size="lg" icon={faGamepad} />
        </NavLink>
      </Col>
      <Col>
        <NavLink to="/app/notificacoes" className={selected === 'notifications' ? 'text-light' : 'text-option'}>
          <FontAwesomeIcon size="lg" icon={faBell} />
        </NavLink>
      </Col>
      <Col>
        <NavLink to="/app/configuracoes" className={selected === 'settings' ? 'text-light' : 'text-option'}>
          <FontAwesomeIcon size="lg" icon={faCog} />
        </NavLink>
      </Col>
    </Row>
  )
}
