import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="card bg-danger col-md-4 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div className="card-header bg-white text-danger m-0">
            <h1 className="login-head">Contact US</h1>
          </div>
          <div className="card-body"></div>

          <form action="">
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" for="Name">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Enter Name"
                  id="Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" for="email">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control form-input"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" for="Message">
                Message :
              </label>
              <textarea
                className="form-control form-input"
                placeholder="Enter Message"
                rows="5"
                style={{ border: "4px solid white" }}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
