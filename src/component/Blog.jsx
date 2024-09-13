import React from 'react';
import "./style.css";
import { com } from '../assets';
import { views } from '../assets';
import { Style } from '../assets';
import { Pants } from '../assets';
import { BiRightArrowAlt } from "react-icons/bi";



const Blog = () => {
  return (
    <>
     <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className='blog-header text-center' style={{ marginTop: '100px'}}>
            <h1><b>BYC AFRICA Blog News</b></h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className='blog-first-img' style={{ marginTop: '100px'}}>
                <img src={ com } alt="" w-100 />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className='blog-first-content ml-4' style={{ marginTop: '100px'}}>
                <h6 className='font-weight-bold' style={{ fontSize: '20px'}}>Fashion trend forecast for  Summer 2021</h6>
                <p className='mt-5' style={{ fontSize: '19px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. 
                  Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud ametAmet 
                  minim mollit non deserunt ullamco <br /> est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam consequat sunt nostrud amet..
                </p>
                <button className='blog-btn p-2 mt-4'>Read more <BiRightArrowAlt style={{ fontSize: '30px'}}/></button>
                <div className='blog-views mt-5'>
                  <img src={ views } alt=""  />
                </div>
                <div className='d-flex mt-4'>
                  <div>
                    <small><b>Wade Warren</b></small>
                  </div>
                  <div className='ml-5'>
                    <small>Fashion Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
     </div>

     <div className="col-sm-12 col-md-12 col-lg-1"></div>
     <div className="col-sm-12 col-md-12 col-lg-10">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className='blog-second-content' style={{ marginTop: '100px',}}>
              <h6 className='font-weight-bold' style={{ fontSize: '20px'}}>Fashion trend forecast for  Summer 2021</h6>
              <p className='mt-5' style={{ fontSize: '19px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud ametAmet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis <br /> enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>
              <button className='blog-btn p-2 mt-4'>Read more <BiRightArrowAlt style={{ fontSize: '30px'}}/></button>
              <div className='blog-views mt-5'>
                <img src={ views } alt=""  />
              </div>
              <div className='d-flex mt-4'>
                <div>
                  <small><b>Wade Warren</b></small>
                </div>
                <div className='ml-5'>
                  <small>Fashion Designer</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className='blog-second-img' style={{ marginTop: '100px'}}>
              <img src={ Style } alt="" />
            </div>
          </div>
        </div>
      </div>
     <div className="col-sm-12 col-md-12 col-lg-1"></div>

     <div className="col-sm-12 col-md-12 col-lg-1"></div>
     <div className="col-sm-12 col-md-12 col-lg-10">
        <div className="row mb-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="blog-third-content">
              <div className='blog-third-img' style={{ marginTop: '100px'}}>
                <img src={ Pants } alt="" w-100 />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className='blog-first-content ml-4' style={{ marginTop: '100px'}}>
              <h6 className='font-weight-bold' style={{ fontSize: '20px'}}>Fashion trend forecast for  Summer 2021</h6>
              <p className='mt-5' style={{ fontSize: '19px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud ametAmet 
                minim mollit non deserunt ullamco <br /> est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam consequat sunt nostrud amet..
              </p>
              <button className='blog-btn p-2 mt-4'>Read more <BiRightArrowAlt style={{ fontSize: '30px'}}/></button>
              <div className='blog-views mt-5'>
                <img src={ views } alt=""  />
              </div>
              <div className='d-flex mt-4'>
                <div>
                  <small><b>Wade Warren</b></small>
                </div>
                <div className='ml-5'>
                  <small>Fashion Designer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
     <div className="col-sm-12 col-md-12 col-lg-1"></div>
    </>
  );
};

export default Blog;
