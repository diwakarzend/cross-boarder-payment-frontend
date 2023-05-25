import React from "react";
import { Text } from "../../Components/styledConstants";
import { DashBoardPaymentWrapper } from "./style";

function DashBoardPayment({merchantData}) {
    return (
        <DashBoardPaymentWrapper>
            <div className="container">
                <div className="top">
                    <div className="transaction-box">
                        <Text color="color3" size="sm" fw="medium">Total Spend :</Text>
                        <Text color="color3" size="xl" fw="medium"><i className="fa fa-rupee" aria-hidden="true"></i> {merchantData?.payoutSum}</Text>
                    </div>
                    <div className="transaction-box">
                        <Text color="color3" size="sm" fw="medium">Total Transactions :</Text>
                        <Text color="color3" size="xl" fw="medium"> {merchantData?.totalPayoutCount}</Text>
                    </div>
                </div>
                {/* <div className="payment-mode">
                    <div className="box">
                        <Text color="color3" size="sm" fw="medium">UPI Payment:</Text>
                        <Text color="color3" size="xl" fw="medium">20</Text>
                    </div>
                    <div className="box">
                        <Text color="color3" size="sm" fw="medium">Bank Transfer:</Text>
                        <Text color="color3" size="xl" fw="medium">0</Text>
                    </div>
                    <div className="box">
                        <Text color="color3" size="sm" fw="medium">UPI Payment:</Text>
                        <Text color="color3" size="xl" fw="medium">0</Text>
                    </div>
                </div> */}
            </div>
            <div className="container">
                <div className="top">
                    <div className="transaction-box">
                        <Text color="color3" size="sm" fw="medium">Received Payment:</Text>
                        <Text color="color3" size="xl" fw="medium"><i className="fa fa-rupee" aria-hidden="true"></i> {merchantData?.totalPayInSum}</Text>
                    </div>
                    <div className="transaction-box">
                        <Text color="color3" size="sm" fw="medium">Total Transactions :</Text>
                        <Text color="color3" size="xl" fw="medium"> {merchantData?.totalPayInCount}</Text>
                    </div>
                </div>
                {/* <div className="payment-mode">
                    <div className="box">
                        <Text color="color3" size="sm" fw="medium">UPI Collect:</Text>
                        <Text color="color3" size="xl" fw="medium">20</Text>
                    </div>
                    <div className="box">
                        <Text color="color3" size="sm" fw="medium">Payment Gateway:</Text>
                        <Text color="color3" size="xl" fw="medium">0</Text>
                    </div>
                </div> */}
            </div>

        </DashBoardPaymentWrapper>
    );
}

export default DashBoardPayment;
