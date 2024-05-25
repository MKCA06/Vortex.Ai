import React from 'react';
import Sidebar from './Sidebar';
import BarChart from './BarChart';
import Progress from './Progress';
import Table from './Table';
import { BsFillPersonFill, BsEnvelope, BsFileText, BsCalendar } from 'react-icons/bs';
import TopBar from './TopBar';
import { useInView } from 'react-intersection-observer';

const Bottom = () => {
  const { ref: topBarRef, inView: topBarInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: tableRef, inView: tableInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-3 p-0">
          <Sidebar />
        </div>
        {/* Content */}
        <div className="col-lg-10 col-md-9">
          <div ref={topBarRef} className={`${topBarInView ? 'animate__animated animate__fadeIn' : ''}`}>
            <TopBar />
          </div>
          {/* Cards */}
          <div className="row mt-3" ref={cardRef}>
            <div className={`col-lg-3 col-md-6 ${cardInView ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsFillPersonFill style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text m-1">63</p>
                  <p className="card-text">New Leads</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 ${cardInView ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsEnvelope style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text m-1">25</p>
                  <p className="card-text">Email</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 ${cardInView ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsFileText style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text m-1">49</p>
                  <p className="card-text">Proposal</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 ${cardInView ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsCalendar style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text m-1">12</p>
                  <p className="card-text">Appointments</p>
                </div>
              </div>
            </div>
          </div>
          {/* Graphs and Charts */}
          <div className="row mt-3" ref={chartRef}>
            <div className={`col-lg-8 ${chartInView ? 'animate__animated animate__fadeInLeft' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <div style={{ height: '300px', backgroundColor: '#333' }}>
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 ${chartInView ? 'animate__animated animate__fadeInRight' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <div style={{ height: '300px', backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Progress />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="row mt-3" ref={tableRef}>
            <div className={`col ${tableInView ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
