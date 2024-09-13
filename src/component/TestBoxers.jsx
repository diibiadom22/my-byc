import React from 'react';
import './style.css';
import { Active } from '../assets';
import { Menu } from '../assets';
import { ArrowDropDown } from '@mui/icons-material';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Blue } from '../assets';
import { Lux } from '../assets';
import { Set } from '../assets';

const TestBoxers = () => {
  const products = [
    {
      id: 0,
      image: Blue,
      heading: 'MEN BOXERS',
      brand: 'BYC 1161',
      paragraph: 'Long Cotton Adjustable Strap Camisole / Tank Top - Black',
      price: 2800.0,
      icon: faStar,
      Star: faStarHalfStroke,
      rating: 4.05,
    },
    {
      id: 1,
      image: Set,
      heading: 'MEN BOXERS',
      brand: 'BYC 1162',
      paragraph: 'Amet minim mollit non deserunt ullamco est sit .',
      price: 3300.0,
      icon: faStar,
      Star: faStarHalfStroke,
      rating: 4.05,
    },
    {
      id: 2,
      image: Blue,
      heading: 'MEN BOXERS',
      brand: 'BYC 1163',
      paragraph: 'Amet minim mollit non deserunt ullamco est sit .',
      price: 2800.0,
      icon: faStar,
      Star: faStarHalfStroke,
      rating: 4.05,
    },
    {
      id: 3,
      image: Lux,
      heading: 'MEN BOXERS',
      brand: 'BYC 1163',
      paragraph: 'Amet minim mollit non deserunt ullamco est sit .',
      price: 2800.0,
      icon: faStar,
      Star: faStarHalfStroke,
      rating: 4.05,
    },
    {
      id: 4,
      image: Set,
      heading: 'MEN BOXERS',
      brand: 'BYC-501LMS',
      paragraph: 'Amet minim mollit non deserunt ullamco est sit .',
      price: 2800.0,
      icon: faStar,
      Star: faStarHalfStroke,
      rating: 4.05,
    },
  ];

  const displayItems = products.map((item) => (
    <div className="col-sm-12 col-md-12 col-lg-2 m-3" key={item.id}>
      <div className="myCard mb-5 mt-5">
        <div className="myCard-img">
          <img src={item.image} alt="" className="w-" />
          
        </div>
        <div className="myCard-body p-3">
          <h6 className="m-0">
            <b>{item.heading}</b>
          </h6>
          <h6 className="font-weight-normal">{item.brand}</h6>
          <p className='mt-3' style={{ color: '#787885', fontSize: '11px' }}>{item.paragraph}</p>
          <p>₦{item.price}</p>
          <div className='text-warning'>
            <span>
              <FontAwesomeIcon  icon={item.icon}/>
            </span>
            <span>
              <FontAwesomeIcon  icon={item.icon}/>
            </span>
            <span>
              <FontAwesomeIcon  icon={item.icon}/>
            </span>
            <span>
              <FontAwesomeIcon  icon={item.icon}/>
            </span>
            <span>
              <FontAwesomeIcon  icon={item.Star}/>
            </span>
            <span className="text-dark ml-2">{item.rating}</span>
          </div>
          
        </div>
      </div>
    </div>
  ));

  return <React.Fragment>{displayItems}</React.Fragment>;
};

export default TestBoxers;
