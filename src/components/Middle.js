import React from 'react'

const Middle = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <div>
          <img width={'20%'} className="mb-5" src="/Group 460.png" alt="" />
        </div>
        <div>
          <img
            width={'50%'}
            className="mb-4"
            src="/middle-subhead.png"
            alt=""
          />
        </div>
        <h5>
          Connect with 10,000 customers in 1 hour with real-time data insights,
          revolutionizing business outreach with AI-human synergy.
        </h5>
        <div
          className="my-4"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button
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
            // width: '60%',
            // height: '70vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Mulish',
              fontWeight: '800',
              textAlign: 'center',
              color: '#FF4D00',
              // Responsive font size
              fontSize: '8vw',
              lineHeight: '1.2',
              // Media query for smaller screens
              '@media (max-width: 768px)': {
                fontSize: '12vw',
              },
            }}
          >
            Sales
          </div>

          <div
            style={{
              backgroundImage: "url('/image 338.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              width: '45%',
              minHeight: '70vh', // Adjusted height
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              //   justifyContent: 'space-around',
              alignItems: 'center',
              padding: '20px',
              paddingTop: 50,
              overflow:"auto"
            }}
          >
            <img className="mb-3" width={'30%'} src="/Group 459.png" alt="" />
            <img className="mb-3" width={'30%'} src="/Group 458.png" alt="" />
            <p>Talk to our voicebot</p>
            <input type="text" className="mb-2" placeholder="Full Name" />
            <input type="text" className="mb-2" placeholder="Email" />
            <input type="text" className="mb-4" placeholder="Email" />
            <button
              className="btn"
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
            style={{
              fontFamily: 'Mulish',
              fontWeight: '800',
              textAlign: 'center',
              color: '#FFA06B',
              // Responsive font size
              fontSize: '8vw',
              lineHeight: '1.2',
              // Media query for smaller screens
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
  )
}

export default Middle
