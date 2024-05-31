import React from 'react'
import logo from '/src/assets/logo.svg'
import '/src/components/css/Nav.css'


const Nav = () => {
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="181" height="43"/>
        </a>
        <div className='head d-flex justify-content-end align-items-center gap-4'>
            <ul className='d-flex flex-row navbar-nav gap-4'>
                <li className='nav-item'>Find Supplies</li>
                <li className='nav-item'>Find Supplies Tags</li>
            </ul> 
            <button type="button" className="btn btn-outline-success d-inline">Login/Sign Up</button>
        </div>
      </div>

    </nav>

    </div>
  )
}

export default Nav