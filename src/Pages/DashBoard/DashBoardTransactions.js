import React, { useState, useEffect } from "react";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import { TableWarpper } from "../../Components/styledConstants";
import { DashBoardTransactionWrapper } from "./style";
import TableLoader from "../../Components/Common/TableLoader";

function DashBoardTransactions({userData, loader}) {
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
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Transaction Id
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Created Date
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Transaction Amout
                                </Text>
                            </th>
                            <th className="text-left">
                                <Text size="rg" fw="medium" color="color7">
                                    Transaction Type
                                </Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {loader && <TableLoader />}
                                {!loader && userData.length ? (
                                    userData.map((user, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.transactionId}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user.createdDate}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user.transactionAmout}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user.transactionType}
                                                </Text>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={12} style={{ textAlign: 'center' }}>No record found</td>
                                    </tr>
                                )}
                    </tbody>
                </table>
            </TableWarpper>
        </DashBoardTransactionWrapper>
    );
}

export default DashBoardTransactions;
