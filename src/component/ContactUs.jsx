import React from 'react'
import "./style.css";
import { Address } from '../assets';
import { Mobile } from '../assets';
import { Email } from '../assets';
import { LiaAngleRightSolid } from "react-icons/lia";
import { Asian } from '../assets';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Divide } from '../assets';


const ContactUs = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className='font-weight-bolder text-center mb-5 mt-5'>CONTACT US</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="w-100 ml-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9875973752974!2d7.374394874741669!3d5.
                                105698294871295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042993424021e8f%3A0x85c5b2e182ef299e!2s175%20
                                Cameroon%20Rd%2C%20Aba%2C%20450002%2C%20Abia!5e0!3m2!1sen!2sng!4v1723028789871!5m2!1sen!2sng
                                "width="1200px" height="450px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                                title='Responsive Google Map'>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10 p-5" style={{ backgroundColor: 'rgba(251, 251, 251, 1)'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='d-flex'>
                            <div>
                                <img src={ Address } alt="" />
                            </div>
                            <div className='mt-3 ml-3'>
                                <h6><span className='location font-weight-bolder'>ADDRESS</span> <br /><span className='office font-weight-normal'>( Head Office )</span> <br /><span className='address font-weight-normal'>175 Cameroun Road Aba, Abia State.</span></h6>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='d-flex'>
                            <div>
                                <img src={ Mobile } alt="" />
                            </div>
                            <div className='mt-4 ml-3'>
                                <h6><span className='phone font-weight-bolder'>PHONE</span> <br /><span className='font-weight-normal'>08101375376</span>  <span className='font-weight-normal'>09053403403</span></h6>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='d-flex'>
                            <div>
                                <img src={ Email } alt="" />
                            </div>
                            <div className='mt-4 ml-3'>
                                <h6><span className=' email font-weight-bolder'>EMAIL ADDRESS</span> <br /><span className='font-weight-normal'>BYCAFRICA@gmail.com</span></h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h1 className='font-weight-bolder'>Drop a Message</h1>
                        <form>
                            <div className="mb-3 mt-5">
                                <label for="number" className="form-label">Phone</label>
                                <input style={{ borderColor: 'rgba(189, 58, 58, 1)', borderRadius: '10px'}} type="text" className="form-control" id="name" placeholder=""/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input style={{ borderColor: 'rgba(189, 58, 58, 1)', borderRadius: '10px'}} type="email" className="form-control" id="email" placeholder=""/>
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Notes</label>
                                <textarea style={{ borderColor: 'rgba(189, 58, 58, 1)', borderRadius: '10px'}} className="form-control" id="message" rows="5" placeholder=""></textarea>
                            </div>
                            <button type="submit" className="myBtn p-2 mb-5 w-100">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mt-5 mb-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10" style={{ width: 'max', border: '1px solid', borderColor: 'rgba(241, 238, 238, 1)', borderRadius: '8px'}}>
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='cardHeading d-flex justify-content-between'>
                            <div>
                                <h6 className=' font-weight-bold' style={{ fontSize: '20px', marginTop: '40px'}}>Recently Viewed</h6>
                            </div>
                            <div className='d-flex'>
                                <Link className='nav-link font-weight-bold' style={{ marginTop: '26px'}} to="/see all"><span className='' style={{ color: 'rgba(189, 58, 58, 1)', fontSize: '18px', marginTop: ''}}>See all</span></Link>
                                <LiaAngleRightSolid style={{ color: 'rgba(189, 58, 58, 1)', marginTop: '38px'}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <img src={ Divide } alt="" className='w-100 mb-3' />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2 ml-4">
                        <div>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '10px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '10px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '10px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '10px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '10px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Boxer Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        
      
    </React.Fragment>
  )
}

export default ContactUs
