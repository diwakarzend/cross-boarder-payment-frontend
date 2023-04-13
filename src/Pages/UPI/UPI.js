import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./UPI.css";

const UPI = (props) => {
  return (
    <div className="container_full">
      {/* <SideBar {...props} /> */}
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Unified Payment Interface (UPI)" value="UPI" />
          <section className="chart_section">
            <div className="row">
              <div className="col-xl-12">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">Transaction Status</div>
                  </div>
                  <div className="card-body">
                    <form className="">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">
                              Wallet Type
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>Prepaid</option>
                              <option>Postpaid</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="exampleInputEmail1">Enter Amount</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="exampleInputEmail1">Enter UPIID</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter UPIID"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="submit"
                            className="btn btn-primary themebtn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UPI;
