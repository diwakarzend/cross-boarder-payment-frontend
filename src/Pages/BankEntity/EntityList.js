import React from "react";
import { Button, TableWrapper } from "../../Components/UI/StyledConstants";

const EntityList = ({listData = [], onUpdateClick}) => {
    return (
        <>
            <TableWrapper>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Bank Name</th>
                            <th>Entity Name</th>
                            <th>Mobile</th>
                            <th>VPA ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((data, i) => 
                            <tr key={i}>
                                <td>{data?.bankName}</td>
                                <td>{data?.entityName}</td>
                                <td>{data?.phone}</td>
                                <td>{data?.vpaId}</td>
                                <td>{data?.isActive ? 'Active' : 'Inactive'}</td>
                                <td><Button onClick={() => onUpdateClick(data)}>Update Entity</Button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </TableWrapper>
        </>
    );
};

export default EntityList;
