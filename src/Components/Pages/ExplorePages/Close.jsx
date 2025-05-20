import React from 'react'
import { Link } from 'react-router-dom'

function Close() {
  return (
    <div>
        <Link to={'/explore'}>
        <h2>x</h2>
        </Link>
    </div>
  )
}

export default Close