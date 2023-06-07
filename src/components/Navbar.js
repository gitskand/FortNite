import React, { useState } from 'react';


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  
 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
          <div className="container-fluid">
            <a className="navbar-brand " style={{ color: "white" }} href="/">FortNite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} aria-current="page" href="/">Home</a>
                </li>
              </ul>

              <div className="form-check form-switch my-2">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={darkMode} onChange={toggleDarkMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div>
             

            </div>
          </div>



        </nav>
      </div>
    </>
  );
}
