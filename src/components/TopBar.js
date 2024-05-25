import React from 'react';
import { BsSearch, BsList, BsFlag, BsBell, BsGear, BsPerson } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className="bg-dark text-light p-2 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <BsSearch className="me-3" />
        <BsList />
      </div>
      <div className="d-flex align-items-center">
        <BsFlag className="me-3" />
        <BsBell className="me-3" />
        <BsGear className="me-3" />
        <BsPerson />
      </div>
    </div>
  );
};

export default TopBar;
