import React from 'react'
import { FaHome, FaServicestack, FaUsers, FaEnvelope } from 'react-icons/fa'

const Sidebar = () => {
  const sidebarStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '20px',
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
  }

  const iconStyle = { marginRight: '10px' }

  return (
    <div style={sidebarStyle}>
      <img src="/Group 461.png" alt="" srcset="" width={130} />
      <ul className="list-unstyled">
        <li>
          <a href="#home" style={linkStyle}>
            <FaHome style={iconStyle} /> Home
          </a>
        </li>
        <li>
          <a href="#services" style={linkStyle}>
            <FaServicestack style={iconStyle} /> Services
          </a>
        </li>
        <li>
          <a href="#clients" style={linkStyle}>
            <FaUsers style={iconStyle} /> Clients
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            <FaEnvelope style={iconStyle} /> Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
