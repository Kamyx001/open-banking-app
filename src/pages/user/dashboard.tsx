import React from 'react';
import { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';

const dashboard: NextPage = () => {
  return (
    <div className="bg-gradient-to-tr from-main to-secondary h-screen">
      <Navbar />
    </div>
  );
}

export default dashboard;