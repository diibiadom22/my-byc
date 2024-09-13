import React from 'react'
import { Visa } from '../assets';
import { PayPal } from '../assets';
import { Master } from '../assets';
import { Facebook } from '../assets';
import { Insta } from '../assets';
import { Youtube } from '../assets';
import { Twitter } from '../assets';
import { line } from '../assets';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./style.css";



 

const Bottom = () => {
  return (
    <React.Fragment>
      <footer className="fat" style={{ backgroundColor: "#212121", padding: "50px 50px",width:'1400px' }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-2 text-light mt-4">
                <h5 className='mb-3'>Company info</h5>
                <p>About Us</p>
                <p>Affliate</p>
                <p>Fashion Blogger</p>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-2 text-light mt-4">
                <h5 className='mb-3'>Help & Support</h5>
                <p>Shipping Info</p>
                <p>Refunds</p>
                <p>How to Order</p>
                <p>How to Track</p>
                <p>Size Guides</p>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-2 text-light mt-4">
                <h5 className='mb-3'>Customer Care</h5>
                <p>Contact Us</p>
                <p>Payment Methods</p>

                <div className='d-flex justify-content-around mr-3'>
                  <img src={ PayPal } alt="" style={{ width: '53.33px', height:'14.17px'}} />
                  <img src={ Visa } alt="" style={{ width: '43.3px', height: '14.17px'}} />
                  <img cl src={ Master } alt="" style={{ width: '23px', height: '14.17px'}} />
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
                <h5 className="text-light latest-news" style={{ marginLeft: '300px'}}>Signup For The Latest News</h5>
                <form className="form-inline mt-3">
                  <input className='form-control w-50 bg-transparent' style={{ marginLeft: '300px'}} type="text" placeholder='Enter Email' />
                  <i className='fas fa-arrow-right text-light'></i>
                </form>
                <div  className='mt-5 d-flex' style={{ marginLeft: '300px', gap: '5px'}}>
                  <div className='text-light'><MdOutlineEmail /></div>
                  <Link to="/" className="text-light" style={{ marginLeft: 'px',}}>bycafrica@gmail.com</Link>
                </div>
                <div  className='d-flex' style={{ marginLeft: '300px', gap: '5px'}}>
                  <div className='text-light'><FiPhone /></div>
                  <Link to="/" className="text-light" style={{ marginLeft: 'px',}}>+2348101375376;<span className='text-light '>+2349053403403 </span></Link>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                <Link className='mr-3' to="/"><img src={ Facebook } alt="" width="35"/></Link>
                <Link className='mr-3' to="/"><img src= { Insta } alt="" width="35"/></Link>
                <Link className='mr-3' to="/"><img src={ Twitter } alt="" width="35"/></Link>
                <Link to="/"><img src={ Youtube } alt="" width="35"/></Link>
              </div>

              <div className='col-sm-12 col-md-12 col-lg-12 mt-3 text-center'>
                <img src={ line } alt="" />  
              </div>
              <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                <small className='text-light'>All rights Reserved  copyright bycafrica 2021.</small>
              </div>
              
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Bottom
