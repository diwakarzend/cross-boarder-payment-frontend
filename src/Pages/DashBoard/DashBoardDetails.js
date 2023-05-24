import React from "react";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import { DashBoardDetailWrapper } from "./style";

function DashBoardDetails() {
    return (
        <DashBoardDetailWrapper>
            <div className="top">
                <div className="left-box">
                    <div className="icon">
                        <img src="../images/balance.png" />
                    </div>
                    <div className="balance">
                        <Text color="color3" size="md" fw="medium">Total Balance:</Text>
                        <Text color="color3" size="xxxl" fw="medium"><i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05</Text>
                    </div>
                </div>
                <div className="right-box">
                    <ButtonSolid primary rg>Add Funds</ButtonSolid>
                </div>
            </div>
            <div className="bottom">
                <div className="box">
                    <div className="count">
                        <Text color="color3" size="sm" fw="medium">Total Merchants</Text>
                        <Text color="color3" size="xl" fw="medium">20</Text>
                    </div>
                    <div className="icon">
                        <img src="../images/merchant.png" />
                    </div>
                </div>
                <div className="box">
                    <div className="count">
                        <Text color="color3" size="sm" fw="medium">Total Pending Merchants</Text>
                        <Text color="color3" size="xl" fw="medium">2</Text>
                    </div>
                    <div className="icon">
                        <img src="../images/pending-merchant.png" />
                    </div>
                </div>
                <div className="box">
                    <div className="count">
                        <Text color="color3" size="sm" fw="medium">Total Blocked User</Text>
                        <Text color="color3" size="xl" fw="medium">0</Text>
                    </div>
                    <div className="icon">
                        <img src="../images/blocked-user.png" />
                    </div>
                </div>
            </div>
        </DashBoardDetailWrapper>
    );
}

export default DashBoardDetails;
