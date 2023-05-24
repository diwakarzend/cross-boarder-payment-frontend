import React from "react";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import { DashBoardChartWrapper } from "./style";

function DashBoardChart() {
    return (
        <DashBoardChartWrapper>
           <div className="box">
                <Text color="color3" size="lg" fw="bold">Last 7 Days Transaction</Text>
                <ButtonSolid primary rg >View All</ButtonSolid>
            </div>
            <img src="../images/chart.png" />
        </DashBoardChartWrapper>
    );
}

export default DashBoardChart;
