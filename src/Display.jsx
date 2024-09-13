import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Bottom from './component/Bottom';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Camsole from './component/Camsole';
import Boxers from './component/Boxers';
import Blogs from './component/Blogs';
import Macbook from './component/Macbook';
import Allproducts from'./component/AllProducts';
import Check from './component/Check';
import Account from './component/Account';



const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route index element={<Macbook />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/camsole" element={<Camsole />} />
        <Route path="/boxers" element={<Boxers />} />
        <Route path="/allproducts" element={<Allproducts />} />
         
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default Display
