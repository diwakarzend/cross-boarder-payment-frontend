import React, {useState} from 'react';
import { Text } from '../../Components/styledConstants';
import { DashboardFilterWrapper, DashboardContentWrapper } from './style';
import DashBoardDetails from './DashBoardDetails'
import DashBoardPayment from './DashBoardPayment';
import DashBoardTransaction from './DashBoardTransactions';
import DashBoardChart from './DashBoardChart';

const Dashboard = () => {

  const [duration, setDuration] = useState("daily");
    return(
        <>
        <DashboardFilterWrapper>
             <Text size="xl" className='heading' fw="bold" color='color3'>Dashboard</Text>
            <div className="left flex item-center">
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
          </div>
        </DashboardFilterWrapper>
        <DashboardContentWrapper>
            <div className='left'>
              <DashBoardDetails />
              <DashBoardChart />
            </div>
            <div className='right'>
              <DashBoardPayment />
              <DashBoardTransaction />
            </div>
        </DashboardContentWrapper>
        </>
    )
}

export default Dashboard;
