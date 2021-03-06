import React from 'react'

export default function ExpeditionImage({img, title, small}) {
  return (
    <div
      className="mb-3"
      style={{
        width: '100%',
        height: small ? '100px' : '150px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="mh-100">
        <h3 className="pt-auto text-white">{title}</h3>
      </div>
    </div>
  )
}
