import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';

const Middle = () => {
  const { ref: middleRef, inView: middleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="p-4" ref={middleRef}>
      <div className={`text-center ${middleInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <div>
          <img width={'20%'} className={`mb-5 ${middleInView ? 'animate__animated animate__zoomIn' : ''}`} src="/Group 460.png" alt="" />
        </div>
        <div>
          <img width={'50%'} className={`mb-4 ${middleInView ? 'animate__animated animate__fadeInLeft' : ''}`} src="/middle-subhead.png" alt="" />
        </div>
        <h5 className={middleInView ? 'animate__animated animate__fadeInRight' : ''}>
          Connect with 10,000 customers in 1 hour with real-time data insights,
          revolutionizing business outreach with AI-human synergy.
        </h5>
        <div
          className="my-4"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button
            className={`animate__animated animate__pulse animate__infinite ${middleInView ? 'animate__animated animate__pulse animate__infinite' : ''}`}
            style={{
              padding: '8px 20px',
              margin: '5px',
              backgroundColor: '#FF4D00',
              color: 'white',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: 10,
            }}
          >
            visit our website
          </button>
          <button
            className={`animate__animated animate__pulse animate__infinite ${middleInView ? 'animate__animated animate__pulse animate__infinite' : ''}`}
            style={{
              padding: '8px 20px',
              margin: '5px',
              backgroundColor: '#FF4D00',
              color: 'white',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: 10,
            }}
          >
            book a meeting
          </button>
        </div>
        <div
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            className={`animate__animated animate__fadeInLeft ${middleInView ? 'animate__animated animate__fadeInLeft' : ''}`}
            style={{
              fontFamily: 'Mulish',
              fontWeight: '800',
              textAlign: 'center',
              color: '#FF4D00',
              fontSize: '8vw',
              lineHeight: '1.2',
              '@media (max-width: 768px)': {
                fontSize: '12vw',
              },
            }}
          >
            Sales
          </div>

          <div
            className={`animate__animated animate__zoomIn ${middleInView ? 'animate__animated animate__zoomIn' : ''}`}
            style={{
              backgroundImage: "url('/image 338.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              width: '45%',
              minHeight: '70vh',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              paddingTop: 50,
              overflow: "auto",
            }}
          >
            <img className={`mb-3 ${middleInView ? 'animate__animated animate__fadeInDown' : ''}`} width={'30%'} src="/Group 459.png" alt="" />
            <img className={`mb-3 ${middleInView ? 'animate__animated animate__fadeInDown' : ''}`} width={'30%'} src="/Group 458.png" alt="" />
            <p className={middleInView ? 'animate__animated animate__fadeInUp' : ''}>Talk to our voicebot</p>
            <input type="text" className={`mb-2 ${middleInView ? 'animate__animated animate__fadeInUp' : ''}`} placeholder="Full Name" />
            <input type="text" className={`mb-2 ${middleInView ? 'animate__animated animate__fadeInUp' : ''}`} placeholder="Email" />
            <input type="text" className={`mb-4 ${middleInView ? 'animate__animated animate__fadeInUp' : ''}`} placeholder="Email" />
            <button
              className={`btn ${middleInView ? 'animate__animated animate__heartBeat' : ''}`}
              style={{
                backgroundColor: '#FF4D00',
                fontSize: 13,
                color: 'white',
                padding: '6px 10px',
                textTransform: 'uppercase',
              }}
            >
              request a callback
            </button>
          </div>
          <div
            className={`animate__animated animate__fadeInRight ${middleInView ? 'animate__animated animate__fadeInRight' : ''}`}
            style={{
              fontFamily: 'Mulish',
              fontWeight: '800',
              textAlign: 'center',
              color: '#FFA06B',
              fontSize: '8vw',
              lineHeight: '1.2',
              '@media (max-width: 768px)': {
                fontSize: '12vw',
              },
            }}
          >
            Agent
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
