import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';
import "../assets/css/common-layout.css";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
              <Sidebar />
          </div>
          <div className='col-lg-10'>
            <div className='mt-3 border border-2 border-black p-3'>
              {children}
            </div>            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout
