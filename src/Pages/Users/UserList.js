import React, { useEffect, useState } from "react";
import { Heading, TableWarpper, Text, ButtonSolid } from "../../Components/styledConstants";
import urls from "../../utils/urls";
import Request from "../../utils/Request";
import CsvDown from "../../Components/ExportFiles/CsvDown";
import PdfDown from "../../Components/ExportFiles/PdfDown";

import Pagination from "../../Components/Common/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ItemPerPage from "../../Components/Common/ItemPerPage";
import { HeadingWrapper, FilterWrapper, AdvanceFilterWrapper } from "./style";
import MaterialInput from "../../Components/Common/Form";
import TableLoader from "../../Components/Common/TableLoader";

const filterForm = {
    phoneNumber: "",
    toDate: "",
    fromDate: "",
}

const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "User Name", key: "userName" },
    { label: "Email", key: "email" },
    { label: "DOB", key: "dob" },
    { label: "Role", key: "role" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Pincode", key: "pincode" },
    { label: "Address", key: "address1" },
];

const tableHeader = [
    {
        firstName: "First Name",
        lastName: "Last Name",
        userName: "User Name",
        email: "Email",
        dob: "DOB",
        role: "Role",
        phoneNumber: "Phone Number",
        pincode: "Pincode",
        address1: "Address",
    },
];

const getTableBody = (data) => {
    const tableBody = [];
    data.forEach((element) => {
        tableBody.push({
            firstName: element.firstName,
            lastName: element.lastName,
            userName: element.userName,
            email: element.email,
            dob: element.dob,
            role: element.role,
            phoneNumber: element.phoneNumber,
            pincode: element.pincode,
            address1: element.address1,
        });
    });

    return tableBody;
};

export default function MerchantsList() {
    const [filter, setFilter] = useState(filterForm)
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(100);

    const [loader, setLoader] = useState(false);

    const [totalElements, setTotalElements] = useState(500);
    const [searchUserList, setSearchUserList] = useState([]);
    const [userDetail, setUserDetails] = useState({});
    const [autoCompleteShow, setAutoCompleteShow] = useState(false);
    const [showAgent, setShowAgent] = useState(false);
    const [toDate, setToDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [downloadPayload, setDownloadPayload] = useState({});
    const [formData, setFormData] = useState({
        username: "",
        mobileNumber: "",
        emailid: "",
        Name: "",
    });

    const getUsers = () => {
        const successHandler = (res) => {
            if (res.data && res.data) {
                setLoader(false);
                setUsers(res.data);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
            }
        };
        const errorHandler = () => { };

        const api = new Request("", successHandler, errorHandler, false);
        return api.get(`${urls.login.BASE_URL}${urls.User.USER_LIST}?pageSize=${pageSize}`);
    };

    useEffect(() => {
        getUsers();
    }, [])

    const handleDateChange = (date) => {
        setToDate(date);
        setFilter({
            ...filter,
            ["toDate"]: new Date(date),
        });
        // setFormErrors({ ...formErrors, [event.target.name]: "" });
    };

const handleAdvanceFilter=()=>{

}
    console.log(totalElements, pageSize);
    return (
        <>
            {/* <BreadCrumb heading="Transaction Report" value="Transaction Report" /> */}
            <div className="wrapper">
                <HeadingWrapper>
                    <Heading size="xl" color="color3">User List</Heading>
                    <span className="flex gap16">
                    <PdfDown
                            tableHeader={tableHeader}
                            getTableBody={getTableBody}
                            url={`${urls.login.BASE_URL}${urls.User.USER_LIST}?pageSize=${pageSize}`}
                            params={downloadPayload}
                            heading="User List"
                            fileName="userlist"
                            method="get"
                        />
                        <CsvDown
                            headers={headers}
                            url={`${urls.login.BASE_URL}${urls.User.USER_LIST}?pageSize=${pageSize}`}
                            params={downloadPayload}
                            reportName="userlist.csv" 
                            method="get"
                        />
                    </span>
                </HeadingWrapper>
                <FilterWrapper>
                    <div className="search">
                        <label>Search By</label>
                        <div className="field">
                            <select>
                                <option value="">Role</option>
                            </select>
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
                    <ButtonSolid md onClick={() => setIsOpen(true)}>Advance Search</ButtonSolid>
                </FilterWrapper>
             {  isOpen? <AdvanceFilterWrapper>
                        <div className="flex space-between mb10 heading-box">
                            <Heading size="xl" color="color3">Advance Search</Heading>
                            <button className="btn" onClick={() => setIsOpen(false)}><i className="fa fa-close"></i></button>
                        </div>
                        <div className="flex search-wrapper">
                        <div className="box">
                            <label>Name</label>
                            <input
                                name="Name"
                                type="text"
                                className=""
                                placeholder="Name"
                                onChange={handleAdvanceFilter}
                                value={formData?.txnId}
                            />
                        </div>
                        <div className="box">
                            <label>Mobile Number</label>
                            <input
                                name="mobileNumber"
                                type="text"
                                className=""
                                placeholder="Mobile Number"
                                onChange={handleAdvanceFilter}
                                value={formData?.mobileNumber}
                            />
                            
                        </div>
                       </div>
                        <div className="flex search-wrapper">
                        <div className="box">
                            <label>Email Id</label>
                            <input
                                name="emailid"
                                type="text"
                                className=""
                                placeholder="Email Id"
                                onChange={handleAdvanceFilter}
                                value={formData?.mobileNumber}
                            /></div>
                              <div className="box">
                            <label>User Name</label>
                            <input
                                name="username"
                                type="text"
                                className=""
                                placeholder="User Name"
                                onChange={handleAdvanceFilter}
                                value={formData?.mobileNumber}
                            /></div>
                            </div>
                        <ButtonSolid primary md>GO</ButtonSolid>
                    </AdvanceFilterWrapper>:""}
                <div>
                    <TableWarpper className="mt24">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            First Name
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Last Name
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            User Name
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Email
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            DOB
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Role
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Phone Number
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Pincode
                                        </Text>
                                    </th>


                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Address
                                        </Text>
                                    </th>
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
                                                <Text size="rg" color="color3">{user.firstName}</Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.lastName}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.userName}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.email}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.dob}
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
                                                    {user?.phoneNumber}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" fw="medium" color="color3">
                                                    {user.pincode}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" fw="medium" color="color3">
                                                    {user.address1}
                                                </Text>
                                            </td>
                                            <td className=" flex btn gap16">
                                            <ButtonSolid primary rg>Edit</ButtonSolid>
                                            <ButtonSolid primary rg>Delete</ButtonSolid>
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
