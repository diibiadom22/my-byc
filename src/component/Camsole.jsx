import React from 'react';
import "./style.css";
import { Asian } from '../assets';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { Active } from '../assets';
import { Menu } from '../assets';
import { ArrowDropDown } from '@mui/icons-material';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Divide } from '../assets';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Camsole = () => {
  return (
    <React.Fragment>
        <div className="row mb-5 mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <small className='ml-4'>Home <MdKeyboardArrowRight />
                            Women <MdKeyboardArrowRight />
                            <small style={{ color: 'rgba(189, 58, 58, 1)'}}>camsole</small>
                        </small>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10" style={{ border: '1px solid', borderColor: 'rgba(241, 238, 238, 1)', borderRadius: '8px'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='cardHeading d-flex justify-content-between'>
                            <div>
                                <h6 className=' font-weight-bold' style={{ fontSize: '20px', marginTop: '40px'}}>Camsole</h6>
                            </div>
                            <div className=''>
                                <fieldset style={{border: '1px solid rgba(189, 58, 58, 1)'}}>
                                    <legend className='' style={{color: 'rgba(189, 58, 58, 1)',fontSize: '10px'}}>SORT BY</legend>
                                    <label>Most sold</label> <ArrowDropDown />
                                </fieldset>   
                            </div>   
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <img src={ Divide } alt="" className='w-100 mb-3' />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <p className='products ml-' style={{color: 'rgba(112, 109, 109, 1)'}}>6 Product Found</p>
                            </div>
                            <div>
                                <span>
                                    <Link to="/"><img src={ Menu } alt="" className='mb-2' /></Link>
                                    <Link to="/"><img src={ Active } alt="" className='mb-2' /></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <img src={ Divide } alt="" className='w-100 mb-3' />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2 ml-4">
                        <div className='mb-5' style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', width: '217px'}}>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3 ml-2"><span className=" font-weight-bolder">CAMISOLE</span><br /><span className="font-weight-normal">BYC-501LMS</span></h6>
                           <p className='ml-2' style={{fontFamily: 'inter', fontSize: '9px', color: 'rgba(120, 120, 133, 1)'}}>Long Cotton Adjustable Strap Camisole <br /> Tank Top - Black</p>
                           <p className='ml-2'>₦1,900.00</p>
                           <div className="rating text-warning font-size-12 ml-2">
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                          <button class="first-btn mr-2 ml-2 mt-3 mb-3"><GrFavorite className='mr-2' />Wishlist</button>
                          <button class="second-btn mt-3 mb-3"><AiOutlineShoppingCart className='mr-2' />Buy Now</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div className=''>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3 ml-2"><span className=" font-weight-bolder">CAMISOLE</span><br /><span className="font-weight-normal">BYC-501LMS</span></h6>
                           <p className='ml-2' style={{fontFamily: 'inter', fontSize: '9px', color: 'rgba(120, 120, 133, 1)'}}>Long Cotton Adjustable Strap Camisole <br /> Tank Top - Black</p>
                           <p className='ml-2'>₦1,900.00</p>
                           <div className="rating text-warning font-size-12 ml-2">
                                <span><i className=""><IoStar /></i> </span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStar /></i></span>
                                <span><i className=""><IoStarHalf /></i></span>
                                <span className="ml-2 text-dark">4.05</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2" style={{ marginLeft: '30px'}}>
                        <div className=''>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3 ml-2"><span className=" font-weight-bolder">CAMISOLE</span><br /><span className="font-weight-normal">BYC-501LMS</span></h6>
                           <p className='ml-2' style={{fontFamily: 'inter', fontSize: '9px', color: 'rgba(120, 120, 133, 1)'}}>Long Cotton Adjustable Strap Camisole <br /> Tank Top - Black</p>
                           <p className='ml-2'>₦1,900.00</p>
                           <div className="rating text-warning font-size-12 ml-2">
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
                           <h6 className="mt-3 ml-2"><span className=" font-weight-bolder">CAMISOLE</span><br /><span className="font-weight-normal">BYC-501LMS</span></h6>
                           <p className='ml-2' style={{fontFamily: 'inter', fontSize: '9px', color: 'rgba(120, 120, 133, 1)'}}>Long Cotton Adjustable Strap Camisole <br /> Tank Top - Black</p>
                           <p className='ml-2'>₦1,900.00</p>
                           <div className="rating text-warning font-size-12 ml-2">
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
                           <h6 className="mt-3 ml-2"><span className=" font-weight-bolder">CAMISOLE</span><br /><span className="font-weight-normal">BYC-501LMS</span></h6>
                           <p className='ml-2' style={{fontFamily: 'inter', fontSize: '9px', color: 'rgba(120, 120, 133, 1)'}}>Long Cotton Adjustable Strap Camisole <br /> Tank Top - Black</p>
                           <p className='ml-2'>₦1,900.00</p>
                           <div className="rating text-warning font-size-12 ml-2">
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

export default Camsole
