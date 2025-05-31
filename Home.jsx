import React, { useState } from 'react'
import './index.css'
import logo from './Images/AcademIQ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { Outlet } from 'react-router-dom'
import Register from './Register'
import Connexion from './Connexion'
import { Link } from 'react-router-dom'
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [isRegisterOpen, setisRegisterOpen] = useState(false)
  const [isConnOpen, setisConnOpen] = useState(false)
  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 shadow-md">
        <div className="flex flex-row justify-between items-center px-2 py-2">
          <Link to="/"><img src={logo} alt="logo" className="h-12 mt-2" /></Link>
          <button
            className="md:hidden text-2xl mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

        <div className="flex">
          <ul className="hidden md:flex flex-row gap-6 justify-start ml-40 mr-4">
            <li className="cursor-pointer hover:text-blue-500"><Link to="/" className="no-underline text-black">Accueil Étudiants</Link></li>
            <li className="cursor-pointer hover:text-blue-500"><Link to="/Resources" className="no-underline text-black">Livres && docs</Link></li>
            <li className="cursor-pointer hover:text-blue-500"><Link to="/Exams" className="no-underline text-black">Examens Pratiques</Link></li>
            <li
              className="relative cursor-pointer"
              onClick={() => setSubmenuOpen(!submenuOpen)}>
              Menu Options <FontAwesomeIcon icon={submenuOpen ? faAngleUp : faAngleDown} />
              {submenuOpen && (
                <ul className="absolute text-start left-0 mt-2 w-48 bg-white shadow-lg rounded z-50">
                  <li className="px-4 py-2 cursor-pointer hover:text-blue-500">About Us</li>
                  <li className="px-4 py-2 cursor-pointer hover:text-blue-500">Contact</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="md:flex flex-row gap-2 mb-2 hidden">
            <button className="btn btn-outline-primary" onClick={() => setisConnOpen(true)}>
            <span>Accéder</span>
          </button>
          <button className="btn btn-dark" onClick={() => setisRegisterOpen(true)}><span>S'inscrire</span></button>
        </div>
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-2 bg-white shadow px-6 py-4 absolute left-0 right-0 top-20 z-50">
            <li className="cursor-pointer border-b py-2 hover:text-blue-600"><Link to="/" className="no-underline text-black">Accueil Étudiants</Link></li>
            <li className="cursor-pointer border-b py-2 hover:text-blue-600"><Link to="/Resources" className="no-underline text-black">Livres && docs</Link></li>
            <li className="cursor-pointer border-b py-2 hover:text-blue-600"><Link to="/Exams" className="no-underline text-black">Examens Pratiques</Link></li>
            <li>
              <button
                className="w-full text-left border-b py-2 hover:text-blue-600 flex items-center justify-between"
                onClick={() => setSubmenuOpen(!submenuOpen)}
              >
                Menu Options <FontAwesomeIcon icon={submenuOpen ? faAngleUp : faAngleDown} />
              </button>
              {submenuOpen && (
                <ul className="pl-4">
                  <li className="py-2 hover:text-blue-600 cursor-pointer">Home</li>
                  <li className="py-2 hover:text-blue-600 cursor-pointer">About Us</li>
                  <li className="py-2 hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>
              )}
            </li>
            <div className="flex flex-row gap-2">
              <button className="btn btn-outline-primary w-fit" onClick={() => setisConnOpen(true)}>
                <span>Accéder</span>
              </button>
              <button className="w-fit btn btn-dark" onClick={() => setisRegisterOpen(true)}>
                <span>S'inscrire</span>
              </button>
            </div>
          </ul>
        )}
      </header>
      <Outlet />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setisRegisterOpen(false)}
      />
      <Connexion
        isOpen={isConnOpen}
        onClose={() => setisConnOpen(false)}
      />
    </div>
  )
}

export default Home