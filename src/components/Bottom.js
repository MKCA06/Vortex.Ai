import React from 'react';
import Sidebar from './Sidebar';
import BarChart from './BarChart';
import Progress from './Progress';
import Table from './Table';
import { BsFillPersonFill, BsEnvelope, BsFileText, BsCalendar } from 'react-icons/bs';
import TopBar from './TopBar';

const Bottom = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-3 p-0">
          <Sidebar />
        </div>
        {/* Content */}
        <div className="col-lg-10 col-md-9">
          <TopBar />
          {/* Cards */}
          <div className="row mt-3">
            <div className="col-lg-3 col-md-6">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsFillPersonFill style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text">63</p>
                  <p className="card-text">New Leads</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsEnvelope style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text">25</p>
                  <p className="card-text">Email</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsFileText style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text">49</p>
                  <p className="card-text">Proposal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <BsCalendar style={{ fontSize: '2rem', borderRadius: '50%' }} />
                  <p className="card-text">12</p>
                  <p className="card-text">Appointments</p>
                </div>
              </div>
            </div>
          </div>
          {/* Graphs and Charts */}
          <div className="row mt-3">
            <div className="col-lg-8">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <div style={{ height: '300px', backgroundColor: '#333' }}>
                    {/* Insert your graph component or code here */}
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <div style={{ height: '300px', backgroundColor: '#333', display:"flex", justifyContent:"center", alignItems:"center" }}>
                    {/* Insert your circular graph component or code here */}
                    <Progress />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="row mt-3">
            <div className="col">
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
