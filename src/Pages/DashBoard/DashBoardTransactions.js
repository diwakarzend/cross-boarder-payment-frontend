import React from "react";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import { TableWarpper } from "../../Components/styledConstants";
import { DashBoardTransactionWrapper } from "./style";

function DashBoardTransactions() {
    return (
        <DashBoardTransactionWrapper>
            <div className="box">
                <Text color="color3" size="lg" fw="bold">Recent Transactions</Text>
                <ButtonSolid primary rg >View All</ButtonSolid>
            </div>
            <TableWarpper className="mt24">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-left sort">
                                <Text size="rg" fw="medium" color="color7">
                                    Payment ID
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Amount
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Created at
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Status
                                </Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Text size="rg" color="color3">YG586WE</Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    <i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    24 Dec 2022
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    Captured
                                </Text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Text size="rg" color="color3">YG586WE</Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    <i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    24 Dec 2022
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    Captured
                                </Text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Text size="rg" color="color3">YG586WE</Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    <i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    24 Dec 2022
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    Captured
                                </Text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Text size="rg" color="color3">YG586WE</Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    <i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    24 Dec 2022
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    Captured
                                </Text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Text size="rg" color="color3">YG586WE</Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    <i className="fa fa-rupee" aria-hidden="true"></i> 8.900.05
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    24 Dec 2022
                                </Text>
                            </td>
                            <td>
                                <Text size="xsm" color="color3">
                                    Captured
                                </Text>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </TableWarpper>
        </DashBoardTransactionWrapper>
    );
}

export default DashBoardTransactions;
