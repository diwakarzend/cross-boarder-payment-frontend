import React, { useEffect } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

import "./AddMoney.css";

const AddMoney = (props) => {
  return (
    <div className="container_full">
      {/* <SideBar {...props} /> */}
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Add Money" value="Add Money" />
          <section className="chart_section">
            <div className="row">
              <div className="col-xl-12">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">Add Money</div>
                  </div>
                  <div className="card-body">
                    <form className="">
                      <div className="row">
                        <div className="form-group col-md-6">
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

                        <div className="form-group col-md-6">
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

                      <div className="row">
                        <div className="col-md-6">
                          <ul className=" payment-method">
                            <li className="alert alert-primary border-0">
                              <h5>
                                Credit Card
                                <span className="text-danger">
                                  Charges : 2.00%
                                </span>
                              </h5>
                              <i className="icon-credit-card"></i>
                            </li>
                            <li className="alert alert-primary border-0">
                              <h5>
                                Debit Card
                                <span className="text-danger">
                                  Charge Details
                                </span>
                              </h5>
                              <i className="icon-credit-card"></i>
                            </li>
                            <li className="alert alert-primary border-0">
                              <h5>
                                Net Banking
                                <span className="text-danger">
                                  Charges : 20.00
                                </span>
                              </h5>
                              <i className="icon-credit-card"></i>
                            </li>
                            <li className="alert alert-primary border-0">
                              <h5>
                                PPI Wallet
                                <span className="text-danger">
                                  Charges : 3.50%
                                </span>
                              </h5>
                              <i className="icon-wallet"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
