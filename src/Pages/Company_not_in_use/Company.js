import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import "./Company.css";

const Company = (props) => {
  return (
    <div>
      {/* <SideBar {...props} /> */}
      <main className="content_wrapper">
        <div className="page-heading">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="page-breadcrumb">
                  <h1>Numbers Of Users</h1>
                </div>
              </div>
              <div className="col-md-6 justify-content-md-end d-flex">
                <div className="breadcrumb_nav">
                  <ol className="breadcrumb">
                    <li>
                      <i className="fa fa-home"></i>
                      <a className="parent-item" href="index.html">
                        Home
                      </a>
                      <i className="fa fa-angle-right"></i>
                    </li>
                    <li className="active">Numbers Of Users</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-sm-12">
              <div className="card card-shadow mb-4">
                <div className="card-header">
                  <div className="card-title">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-secondary">
                        Copy
                      </button>
                      <button type="button" className="btn btn-secondary">
                        CSV
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Excel
                      </button>
                      <button type="button" className="btn btn-secondary">
                        PDF
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table
                    id="bs4-table"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Diwakar</td>
                        <td>Apna Kaam</td>
                        <td>9999999999</td>
                        <td>Diwakar@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Rahul</td>
                        <td>Apna Kaam</td>
                        <td>9999999998</td>
                        <td>rahul@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Manish</td>
                        <td>Apna Kaam</td>
                        <td>9999999997</td>
                        <td>manish@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Ravi</td>
                        <td>Apna Kaam</td>
                        <td>9999999996</td>
                        <td>ravi@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Diwakar</td>
                        <td>Apna Kaam</td>
                        <td>9999999999</td>
                        <td>Diwakar@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Rahul</td>
                        <td>Apna Kaam</td>
                        <td>9999999998</td>
                        <td>rahul@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Company);
