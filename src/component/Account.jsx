import React from "react";

const Account = () => {
  return (
    <>
      <div className="mother jumbotron mx-5" style={{ marginTop:'10rem'}}>
        <div className="" style={{ margin: "8rem" }}>
          <form className="">
            <h4
              className=""
              style={{ marginLeft: "8rem", marginBottom: "-3rem" }}
            >
              {" "}
              <strong>Login</strong>
            </h4>
            <div className="mb-3 mt-5">
              <label for="email" className="form-label">
                email
              </label>
              <input
                style={{
                  borderColor: "rgba(189, 58, 58, 1)",
                  borderRadius: "10px",
                  width: "22rem",
                }}
                type="text"
                className="form-control"
                id="email"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                password
              </label>
              <input
                style={{
                  borderColor: "rgba(189, 58, 58, 1)",
                  borderRadius: "10px",
                  width: "22rem",
                }}
                type="email"
                className="form-control"
                id="password"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="btn-main"
              style={{ backgroundColor: "white" }}
            ></button>

            <div className="rem" style={{ display: "flex", gap: "2rem" }}>
              <p
                className=""
                style={{ marginLeft: "3.7rem", marginTop: "-2.4rem" }}
              >
                Remember me
              </p>
              <p className="" style={{ marginLeft: "", marginTop: "-2.4rem" }}>
                forgot password
              </p>
            </div>
            <button
              className="btn-log"
              style={{
                padding: " 3px, 220px",
                backgroundColor: "#BD3A3A",
                color: "white",
                border: "none",
                borderRadius: "7px",
              }}
            >
              Login
            </button>
          </form>
        </div>

        <div
          className="para"
          style={{ textAlign: "center", marginTop: "-26rem",  }}
        >
          <h1 className="" style={{ marginBottom: "4rem" }}>
            Create your an account
          </h1>
          <p className="" style={{ marginTop: "2rem" }}>
            Create your customer account in just a few clicks! <br />
            You can register using your e-mail address{" "}
          </p>
          <div>
            <button
              className="btn-last"
              style={{
                marginTop: "4rem",
                backgroundColor: "#BD3A3A",
                border: "none",
                color: "white",
                textAlign: "center",
                borderRadius: "7px",
              }}
            >
              CREATE AN ACCOUNT VIA E-MAIL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;