import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container d-flex flex-row">
          <a className="navbar-brand" href="#">StudyBuddies</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav m-auto my-2 my-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >
                  Contact Us
                </a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;