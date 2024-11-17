import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className='text-center'>
      <h1>LA PAGINA NO EXISTE</h1>
      <Link className='btn btn-success' to="/">Regresar a inicio</Link>
    </div>
        
    </>
  )
}
