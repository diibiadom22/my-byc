import React from 'react'
import "./style.css";
import { Boxers } from '../assets';
import { Link } from 'react-router-dom';
import { Ribbon } from '../assets';
import { LiaAngleRightSolid } from "react-icons/lia";
import { Asian } from '../assets';
import { Divide } from '../assets';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";




const About = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className='font-weight-bolder text-center mb-5 mt-5'>ABOUT US</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={ Boxers } alt="" className='w-100 ml-4' />
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                       <div className='' style={{ marginTop: '70px'}}>
                            <h2 className='font-weight-bolder ml-4'>ABOUT BYC AFRICA</h2>
                            <p className='mt-3 ml-4' style={{ fontSize: '28px'}}>We are the sole distributor of BYC products in <br /> Africa. we import BYC products from Korea <br />
                                and distribute them to African countries <br /> through Onanik Holdings Limited.
                            </p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className='font-weight-bolder text-center mb-5 mt-5'>WHAT OUR RECORD SAYS</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Gold Prize for the Best Listed Firm awarded <br />
                                    by Daesin Economy Research Institute.
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1990</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5 d-flex flex-row' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as representaive enterprise of Korea for
                                    successful stategies on globalization of Korean brands
                                    by Korean Traders Association.
                                </p>
                                <h4 className='font-weight-bolder mt-3' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1993</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>BYC' selected as the most preferred brand for
                                    underwear by the Federation of Korean 
                                    Women Economists..
                                </p>
                                <h4 className='font-weight-bolder mt-3' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1997</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as the official commercializer of underwear for 
                                    1988 France Worldcup.
                                </p>
                                <h4 className='font-weight-bolder mt-5' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1997</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>The Prize for Export of Original Brands awarded as 
                                    recommended by the Korean Assoiatioon of 
                                    Textile Industries
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1999</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>"The 10th Prize for the Enterprise of Economical
                                    Justice" by the enterprise Assessment commission.
                                </p>
                                <h4 className='font-weight-bolder mt-5' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2001</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>The Prize for Export of Original Brands awarded as 
                                    recommended by the Korean Assoiatioon of 
                                    Textile Industries
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2006</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>selected by korea management association as no.1 <br /> 
                                    in brand influence among the men's underwear 
                                    companies
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2006</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as the Best Korean Enterprise of 1992 by 
                                    Korean Management Association.
                                </p>
                                <h4 className='font-weight-bolder' style={{ color: 'rgba(215, 0, 15, 1)', marginTop: '42px'}}>Year 2011</h4>
                            </div>
                        </div>
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
                        <div className=''>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '12px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Cotton Underwear 3 In 1</p>
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
                        <div className=''>
                           <img src={ Asian } alt="" style={{width: '217px'}} /> 
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '12px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Cotton Underwear 3 In 1</p>
                           <p>₦1,900.00</p>
                           <div className="rating text-warning font-size-12">
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
                           <h6 className="mt-3"><span className=" font-weight-bolder">MEN BOXERS</span><br /><span className="">BYC 1163</span></h6>
                           <p className='' style={{fontFamily: 'inter', fontSize: '12px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Cotton Underwear 3 In 1</p>
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
                           <p className='' style={{fontFamily: 'inter', fontSize: '12px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Cotton Underwear 3 In 1</p>
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
                           <p className='' style={{fontFamily: 'inter', fontSize: '12px', color: 'rgba(120, 120, 133, 1)'}}>Fashionable Men's Underwear Cotton Underwear 3 In 1</p>
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

export default About
