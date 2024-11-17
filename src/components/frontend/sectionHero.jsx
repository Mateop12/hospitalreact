import React from 'react'
import { Link } from 'react-router-dom'

function SectionHero() {
  return (
    <>
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <h1>Welcome to Medilab</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <Link to="/login" className="btn-get-started scrollto">Pedir Cita</Link>
            </div>
        </section>
    </>
  )
}

export default SectionHero