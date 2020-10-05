import React from 'react'

import './Splash.css'

export default function Splash({src}) {
  return (
    <div className="splash">
      <img src={src} alt="Logo da Splash" />
    </div>
  )
}
