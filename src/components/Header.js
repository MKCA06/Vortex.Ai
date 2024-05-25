import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={headerRef}>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${headerInView ? 'animate__animated animate__fadeInDown' : ''}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ width: '40%' }}>
            <img src="/Group 461.png" alt="" srcset="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ fontWeight: "bold" }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ fontWeight: "bold" }}>
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ fontWeight: "bold" }}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: '8px 20px',
              margin: '5px',
              backgroundColor: '#FF4D00',
              color: 'white',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: 10,
              cursor: "pointer"
            }}
          >
            Login/Signup
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundImage: "url('/Ellipse 794.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '90%',
            height: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            className="animate__animated animate__heartBeat animate__infinite"
            style={{
              backgroundImage: "url('/Ellipse 795.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              width: '80%',
              height: '80%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="/Group 334.png"
              alt=""
              srcset=""
              width={'128px'}
              height={'192px'}
            />
            <div>
              <p className="header-inner-circle-text">
                Automate Your Pre-Sales
              </p>
              <p style={{ fontSize: '25px', fontFamily: 'mulish' }}>
                <span style={{ color: '#FF4D00' }}>Recently received $2</span>{' '}
                million in seed funding
              </p>
            </div>
            <div>
              <span
                style={{
                  backgroundColor: '#FF4D00',
                  padding: '10px 20px',
                  textTransform: 'uppercase',
                  borderRadius: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '16px',
                  fontFamily: 'mulish',
                }}
              >
                Start a conversation
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/Ellipse 796.png')",
            height: '150px',
            width: '150px',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            right: '20%',
            top: '24%',
          }}
        >
          <img
            src="/online-meeting 1.png"
            alt=""
            srcset=""
            width={'30px'}
            height={'30px'}
          />
          <p
            style={{
              fontSize: '15px',
              fontFamily: 'mulish',
              fontWeight: 'bold',
            }}
          >
            Book a 30 minutes meeting with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
