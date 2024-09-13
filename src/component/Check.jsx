import React from 'react';
import { Green } from '../assets';
import { trust } from '../assets';

const Check = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <h2
            style={{
              marginTop: '14rem',
              marginBottom: '',
              marginLeft: '1.5rem',
            }}
          >
            Order Summary 1 item(s){' '}
          </h2>
          <div className="man">
            <img src={Green} alt="" />
          </div>
          <div
            className="p1"
            style={{ marginLeft: '15rem', marginTop: '-12rem' }}
          >
            <h2>
              MEN BOXERS <br />
              BYC 1166
            </h2>
            <p>100% Cotton 12 Pieces Of Mens Boxer </p>
            <h3>₦2,800.00</h3>
            <p>Quantity:1</p>
            <button className="btn-new">Modify Cart</button>
          </div>

          <div className="p" style={{ textAlign: 'end', marginTop: '-13rem' }}>
            <p style={{ marginRight: '22rem', wordSpacing: '4rem' }}>
              Subtotal ₦2,800.00
            </p>

            <div className="delivery">
              <p style={{ wordSpacing: '4rem', marginRight: '21rem' }}>
                Deliveryfee ₦2,800.00
              </p>
            </div>
            <div className="total">
              <h4 style={{ wordSpacing: '4.1rem', marginRight: '20rem' }}>
                Total ₦2,800.00
              </h4>
            </div>
          </div>

          <div
            className="shipping"
            style={{
              marginTop: '15rem',
              display: 'flex',
              gap: '33rem',
              marginBottom: '5rem',
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
              marginBottom: '15rem',
            }}
          >
            <h2>SHIPPING ADDRESS</h2>
            <h2 style={{}}>CHECKOUT</h2>
          </div>

          <div
            className="cover"
            style={{
              marginLeft: '41rem',
              marginTop: '',
              backgroundColor: '',
              width: '34.5rem',
            }}
          >
            <h4 style={{ marginLeft: '4.2rem', marginBottom: '-2rem' }}>
              {' '}
              Direct bank transfer
            </h4>
            <fieldset style={{ marginBottom: '2rem' }}>
              <input
                type="radio"
                className=" rad-1"
                style={{
                  border: '0px',
                  width: '60%',
                  height: '2rem',
                  marginLeft: '-10rem',
                }}
              />
            </fieldset>

            <div
              className="special"
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              <p style={{ backgroundColor: '' }}>
                Make your payment directly into our bank account. <br />
                Please use your Order ID as the payment reference. <br />
                Your order will not be shipped until the funds have cleared in
                our account.
              </p>
            </div>
            <div>
              <h6 style={{ marginLeft: '3rem', marginBottom: '-1.5rem' }}>
                Secured Online Payment
              </h6>
              <fieldset style={{ marginBottom: '-4rem', accentColor: 'red' }}>
                <input
                  type="radio"
                  className=" "
                  style={{
                    border: '0px',
                    width: '60%',
                    height: '2rem',
                    marginLeft: '-10rem',
                  }}
                />
              </fieldset>
            </div>
            <img src={trust} alt="" style={{ marginLeft: '15rem' }} />
            <p style={{ marginTop: '5rem' }}>
              Your personal data will be used to process your order, support
              your experience throughout <br />
              this website, and for other purposes described in our privacy
              policy.
            </p>
          </div>
          <div className="btn-build" style={{ textAlign: 'end' }}>
            <button
              style={{
                border: 'none',
                marginRight: '11rem',
                padding: '7px 190px',
                borderRadius: '7px',
                backgroundColor: '#BD3A3A',
                color: 'white',
              }}
            >
              Place order
            </button>
          </div>

          <div className="top-fm" style={{ marginTop: '22rem' }}>
            <form className="" style={{ marginTop: '-50rem' }}>
              <label for="email" className="form-label">
                Full Name
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                Company name (optional)
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                Contry/Rigion
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                Town/City
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                State
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                state
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <label for="email" className="form-label">
                phone
              </label>
              <input
                style={{
                  borderColor: 'rgba(189, 58, 58, 1)',
                  borderRadius: '10px',
                  width: '22rem',
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />

              <div className="mb-3">
                <label for="password" className="form-label">
                  Email address
                </label>
                <input
                  style={{
                    borderColor: 'rgba(189, 58, 58, 1)',
                    borderRadius: '10px',
                    width: '22rem',
                  }}
                  type="email"
                  className="form-control"
                  id="password"
                  placeholder=""
                />
              </div>

              <button
                className="btn-log"
                style={{
                  padding: ' 3px, 220px',
                  backgroundColor: '#BD3A3A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '7px',
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default Check;