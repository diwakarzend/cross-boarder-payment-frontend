import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ViewAdminWrapper } from "../../components/ManageAdmin/style";
import { Heading, TableWarpper, Text, IconInactive, ButtonSolid } from "../../Components/styledConstants";
import urls from "../../utils/urls";
import Request from "../../utils/Request";
import Config from "../../utils/urls";
import CsvDown from "../../Components/ExportFiles/CsvDown";
import PdfDown from "../../Components/ExportFiles/PdfDown";
import XlsDown from "../../Components/ExportFiles/XlsDown";

import IconActive from "../../assests/images/Icons/IconActive";
// import FilterBox from "../../Components/Common/FilterBox";
import Pagination from "../../Components/Common/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ItemPerPage from "../../Components/Common/ItemPerPage";
// import IconUser from "../../assets/images/IconUser";
import { getParams } from "../../utils/common";
import { HeadingWrapper, FilterWrapper } from "./style";
import MaterialInput from "../../Components/Common/Form";
import TableLoader from "../../Components/Common/TableLoader";
import { BorderBtn } from "../../Components/UI/StyledConstants";

const filterForm = {
    accountNumber: "",
    clientId: "",
    date: "",
    route: "",
    status: "",
    txnId: "",
    vendorId: ""
  }
// const filterForm = [
//     {
//         name: "mobileNumber",
//         type: "text",
//         value: "",
//         placeholder: "Mobile Number",
//     },
//     {
//         name: "emailId",
//         type: "text",
//         value: "",
//         placeholder: "Email",
//     },
//     {
//         name: "name",
//         type: "text",
//         value: "",
//         placeholder: "Name",
//     },
//     {
//         name: "distributorName",
//         type: "text",
//         value: "",
//         placeholder: "Search Distributor",
//     },
// ];

// const options = [
//     { label: "Active", value: "ACTIVE" },
//     { label: "Suspended", value: "SUSPENDED" },
//     { label: "Inactive", value: "IN_ACTIVE" },
//     { label: "Verified", value: "ACTIVE" },
// ];

// const showagentFilter = {
//     //   icon: <IconUser />,
//     name: "showagent",
//     type: "checkbox",
//     value: "",
//     placeholder: "Show Agent",
//     className: "agentcheckbox",
// };
// const userStatusColor = {
//     active: "color10",
//     inactive: "color4",
//     suspended: "color11",
// };
// const headers = [
//     { label: "Id", key: "id" },
//     { label: "Name", key: "name" },
//     { label: "Email Id", key: "emailId" },
//     { label: "Registered On", key: "createdAt" },
//     { label: "Mobile No.", key: "mobileNo" },
//     { label: "User Role", key: "role" },
//     { label: "Status", key: "status" },
// ];
// const agentHeader = [
//     { label: "Name", key: "name" },
//     { label: "Email Id", key: "email" },
//     { label: "Registered On", key: "createdAt" },
//     { label: "Mobile No.", key: "mobile" },
//     { label: "User Role", key: "userType" },
//     { label: "Status", key: "status" },
//     { label: "Total Merchants", key: "merchantCount" },
// ];

// const tableHeader = [
//     {
//         name: "Name",
//         emailId: "Email Id",
//         createdAt: "Registered On",
//         mobile: "Mobile No.",
//         userRole: "User Role",
//         status: "Status",
//     },
// ];
// const agentTableHeader = [
//     {
//         name: "Name",
//         emailId: "Email Id",
//         createdAt: "Registered On",
//         mobile: "Mobile No.",
//         userRole: "User Role",
//         status: "Status",
//         merchantCount: "Merchant Count",
//     },
// ];
export default function MerchantsList() {
    // const [controls, setControls] = useState([...filterForm]);
    const [filter, setFilter] = useState(filterForm)
    const [userData, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const [loader, setLoader] = useState(false);

    const [totalElements, setTotalElements] = useState(500);
    const [searchUserList, setSearchUserList] = useState([]);
    const [userDetail, setUserDetails] = useState({});
    const [autoCompleteShow, setAutoCompleteShow] = useState(false);
    const [showAgent, setShowAgent] = useState(false);
    const [toDate, setToDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    // const [csvDownloadHeading, setCsvDownloadHeading] = useState([...headers]);
    // const [pdfDownloadHeading, setPdfDownloadHeading] = useState([...tableHeader]);
    //   const [downloadapiLink, setDownloadapiLink] = useState(
    //     `${Config.apis.admin.USER_LIST}?pageNo=1&pageSize=${totalElements}`,
    //   );
    const [downloadPayload, setDownloadPayload] = useState();

    const getUsers = () => {
        const successHandler = (res) => {
            if (res.data && res.data.content) {
                setLoader(false);
                setUsers(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
                // setDownloadapiLink(`${Config.apis.admin.USER_LIST}?pageNo=1&pageSize=${res.data.totalElements}`);
            }
        };
        const errorHandler = () => { };

        // const params = getParams(controls);
        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.User.USER_LIST}?pageNo=${currentPage}&pageSize=${pageSize}`, filter);
        // return api.post(`${Config.apis.admin.USER_LIST}?pageNo=${currentPage}&pageSize=${pageSize}`, params);
    };

    useEffect(() => {
        getUsers();
    }, [])

    const manageStatus = (params) => {
        //       SUSPENDED, ACTIVE, IN_ACTIVE

        const successHandler = (res) => { };
        const errorHandler = (res) => { };

        const api = new Request("", successHandler, errorHandler, false);

        // return api.get(`${Config.apis.admin.UPDATE_STATUS}?id=${params.id}&status=${params.status}`).then((res) => {
        //   if (res.status) {
        //     getUsers();
        //   }
        // });
    };

    const getAgentList = () => {
        const successHandler = (res) => {
            setLoader(false);
            if (res.data && res.data.content) {
                setUsers(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
                let _agentPayload = agentPayload;
                _agentPayload.pagination.pageSize = res.data.totalElements;
                setDownloadPayload(_agentPayload);
                //setDownloadapiLink(`${Config.apis.distributer.GET_AGENTS}`);
            } else {
                setUsers([]);
                setTotalPages(1);
            }
        };
        const errorHandler = () => { };

        const api = new Request("", successHandler, errorHandler, false);

        // return api.post(`${Config.apis.distributer.GET_AGENTS}`, agentPayload);
    };

    // const renderStatus = (data) => {
    //     const status = data.status.toLowerCase();
    //     switch (status) {
    //         case 'active':
    //             return <div className="flex flex-center">
    //                 <IconActive width="13" className="align-top mr6" color="#2AC940" /><Text size="xsm" fw="medium" color="color10">
    //                     {data.status}
    //                 </Text>
    //             </div>
    //         case 'inactive':
    //             return <div className="flex flex-center">
    //                 <IconInactive width="12px" className="align-top mr6" /><Text size="xsm" fw="medium" color="color4">
    //                     {data.status}
    //                 </Text>
    //             </div>
    //         case 'suspended':
    //             return <div className="flex flex-center">
    //                 <IconInactive width="12px" className="align-top mr6" color="color11" /><Text size="xsm" fw="medium" color="color11">
    //                     {data.status}
    //                 </Text>
    //             </div>
    //     }
    // }

    const handleDateChange = (date) => {
        setToDate(date);
        setFilter({
            ...filter,
            ["toDate"]: new Date(date),
        });
        // setFormErrors({ ...formErrors, [event.target.name]: "" });
    };

    console.log(totalElements, pageSize);
    return (
        <>
            {/* <BreadCrumb heading="Transaction Report" value="Transaction Report" /> */}
            <div className="wrapper">
            <HeadingWrapper>
                <Heading size="xl" color="color3">User List</Heading>
                <span className="flex gap16">
                    {/* <CsvDown
                        type="merchantlist"
                        title="CSV"
                    /> */}
                    <PdfDown
                        heading="Merchant List"
                        fileName="merchantlist"
                    />
                    <XlsDown fileName="Report"/>
                </span>
            </HeadingWrapper>
            <FilterWrapper>
                <div className="search">
                    <label>Search by</label>
                    <div className="field">
                        <select>
                            <options>Phone No.</options>
                        </select>
                        <input type="text" placeholder="value" />
                    </div>
                </div>
                <div className="search">
                    <label>Filter by</label>
                    <div className="field">
                        <MaterialInput
                            // icon={<IconMobile />}
                            name="toDate"
                            type="date1"
                            onChange={handleDateChange}
                            placeholder="From Date"
                            value={toDate}
                        // error={formErrors.dob}
                        />
                        <MaterialInput
                            // icon={<IconMobile />}
                            name="fromDate"
                            type="date1"
                            onChange={handleDateChange}
                            placeholder="To Date"
                            value={toDate}
                        // error={formErrors.dob}
                        />
                        <ButtonSolid primary md>GO</ButtonSolid>
                    </div>
                </div>
            </FilterWrapper>
            <div>
                {/* <FilterBox
          filterForm={filterForm}
          onFilterChange={FilterChangeHandler}
          onFilterSubmit={searchAdmin}
          refreshPage={refreshPage}
          className="filter-box"
        /> */}

                {autoCompleteShow && searchUserList.length ? (
                    <div className="distributorautorlist">
                        <ul>
                            {searchUserList.length
                                ? searchUserList.map((item, index) => (
                                    <li key={"srch" + index}>
                                        <Text
                                            onClick={() => {
                                                setUserDetail(item);
                                            }}
                                            role="button"
                                            tabIndex="0"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {item.name}
                                        </Text>
                                    </li>
                                ))
                                : ""}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
                <TableWarpper className="mt24">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-left sort">
                                    <Text size="rg" fw="medium" color="color7">
                                        Name
                                    </Text>
                                </th>
                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Email
                                    </Text>
                                </th>
                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Contact
                                    </Text>
                                </th>
                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Role
                                    </Text>
                                </th>
                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Registered on
                                    </Text>
                                </th>
                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Status
                                    </Text>
                                </th>
                                {showAgent ? (
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Total Merchant
                                        </Text>
                                    </th>
                                ) : (
                                    ""
                                )}

                                <th className="text-left">
                                    <Text size="rg" fw="medium" color="color7">
                                        Action
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
                                            <Text size="rg" color="color3">{user.name}</Text>
                                        </td>
                                        <td>
                                            <Text size="xsm" color="color3">
                                                {user?.emailId ? user?.emailId : user?.email}
                                            </Text>
                                        </td>
                                        <td>
                                            <Text size="xsm" color="color3">
                                                {user?.mobileNo ? user?.mobileNo : user?.mobile}
                                            </Text>
                                        </td>
                                        <td>
                                            <Text size="xsm" color="color3">
                                                {user.role
                                                    ? user.role.replace(/_/g, " ").replace("ROLE", "")
                                                    : user?.userType
                                                        ? user?.userType.replace(/_/g, " ").replace("ROLE", "")
                                                        : ""}
                                            </Text>
                                        </td>
                                        <td>
                                            <Text size="xsm" color="color3">
                                                {user.createdAt && user.createdAt.split("T")[0]}
                                            </Text>
                                        </td>
                                        <td>
                                            {/* {renderStatus(user)} */}
                                            {/* <Text size="xsm" fw="medium" color={userStatusColor[user.status.toLowerCase()]}>
                        {user.status}
                      </Text> */}
                                        </td>
                                        {showAgent ? (
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.merchantCount ? (
                                                        <Link to={"/merchant/individual/list?agentid=" + user.userId}> {user?.merchantCount}</Link>
                                                    ) : (
                                                        0
                                                    )}
                                                </Text>
                                            </td>
                                        ) : (
                                            ""
                                        )}
                                        <td>
                                            <div className="flex flex-center gap24">
                                                <div className="change-status-actions pos-rel">
                                                    <IconActive className="align-top" color="#2AC940" />
                                                    <div className="tooltip">
                                                        <ul>
                                                            <li
                                                                className="pointer flex flex-center"
                                                                onClick={() => manageStatus({ id: user.id, status: "ACTIVE" })}
                                                            >
                                                                <IconActive width="13" className="align-top mr6" color="#2AC940" />
                                                                <Text size="xxxsm" color="color3">
                                                                    Active
                                                                </Text>
                                                            </li>
                                                            <li
                                                                className="pointer flex flex-center"
                                                                onClick={() => manageStatus({ id: user.id, status: "SUSPENDED" })}
                                                            >
                                                                <IconInactive width="12px" className="align-top mr6" color="color11" />
                                                                <Text size="xxxsm" color="color3">
                                                                    Suspended
                                                                </Text>
                                                            </li>
                                                            <li
                                                                className="pointer flex flex-center"
                                                                onClick={() => manageStatus({ id: user.id, status: "IN_ACTIVE" })}
                                                            >
                                                                <IconInactive width="12px" className="align-top mr6" />
                                                                <Text size="xxxsm" color="color3">
                                                                    Inactive
                                                                </Text>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <Link to={"/admin-edit/" + user.id}>
                                                    <ButtonSolid className="view-btn">Edit</ButtonSolid>
                                                </Link>
                                            </div>
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
                <div className="mt24 flex flex-center">
                    {userData.length > 1 && (
                        <ItemPerPage
                            pageSize={pageSize}
                            getPageSize={(pageSize) => {
                                setPageSize(pageSize);
                            }}
                        />
                    )}
                    {totalPages > 1 && (
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            getCurrentPageData={(curpage) => {
                                setLoader(true);
                                setCurrentPage(curpage);
                            }}
                        />
                    )}
                </div>
            </div>
            </div>
        </>
    );
}
