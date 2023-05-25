import React, { useState, useEffect } from 'react';
import { Text } from '../../Components/styledConstants';
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { DashboardFilterWrapper, DashboardContentWrapper } from './style';
import DashBoardDetails from './DashBoardDetails'
import DashBoardPayment from './DashBoardPayment';
import DashBoardTransaction from './DashBoardTransactions';
import DashBoardChart from './DashBoardChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [walletData, setWalletData] = useState([]);
  const [userData, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const getTransactions = () => {
    const successHandler = (res) => {
      if (res.data && res.data.content) {
        setLoader(false);
        setUsers(res.data.content);
        setTotalPages(res.data.totalPages);
        setTotalElements(res.data.totalElements);
      }
    };
    const errorHandler = () => { };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.TRANSACTION_LIST}?pageNo=1&pageSize=7`, {});
  };

  const getData = () => {
    const successHandler = (res) => {
      if (res.data) {
        setData(res.data);
      }
    };
    const errorHandler = () => { };

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(`${urls.login.BASE_URL}${urls.User.DASHBOARD}`);
  };

  const getWalletData = () => {
    const successHandler = (res) => {
      if (res.data) {
        setWalletData(res.data);
      }
    };
    const errorHandler = () => { };

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(`${urls.login.BASE_URL}${urls.User.WALLET_BALANCE}`);
  };

  useEffect(() => {
    getData();
    getWalletData();
    getTransactions();
  }, [])

  return (
    <>
      <DashboardFilterWrapper>
        <Text size="xl" className='heading' fw="bold" color='color3'>Dashboard</Text>
        {/* <div className="left flex item-center">
            <button
              className={`filter-btn${duration == "daily" ? " active" : ""}`}
            >
              Daily
            </button>
            <button
              className={`filter-btn${
                duration == "week" ? " active" : ""
              }`}
            >
              Week
            </button>
            <button
              className={`filter-btn${duration == "month" ? " active" : ""}`}
            >
              Month
            </button>
            <button
              className={`filter-btn${
                duration == "year" ? " active" : ""
              }`}
            >
              Year
            </button>
          </div> */}
      </DashboardFilterWrapper>
      <DashboardContentWrapper>
        <div className='left'>
          <DashBoardDetails merchantData={data} walletData={walletData} />
          <DashBoardChart />
        </div>
        <div className='right'>
          <DashBoardPayment merchantData={data} />
          <DashBoardTransaction userData={userData} loader={loader} />
        </div>
      </DashboardContentWrapper>
    </>
  )
}

export default Dashboard;
