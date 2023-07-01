import React, { useEffect, useState } from "react";
import { Heading, TableWarpper, Text, ButtonSolid } from "../../Components/styledConstants";
import { useHistory } from "react-router-dom";
import urls from "../../utils/urls";
import Request from "../../utils/Request";

import Pagination from "../../Components/Common/Pagination";
import { BorderBtn } from "../../Components/UI/StyledConstants";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ItemPerPage from "../../Components/Common/ItemPerPage";
import { HeadingWrapper, FilterWrapper, TabWrapper, TicketHeadingWrapper } from "./style";
import MaterialInput from "../../Components/Common/Form";
import TableLoader from "../../Components/Common/TableLoader";

const filterForm = {
    phoneNumber: "",
    toDate: "",
    fromDate: "",
}


export default function Ticket() {
    const [tab, setTab] = useState('all');
    const [filter, setFilter] = useState(filterForm)
    const [ticketData, setTicketData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pageNo, setPageNo] = useState(1);

    const [loader, setLoader] = useState(false);

    const [totalElements, setTotalElements] = useState(500);
    const [searchUserList, setSearchUserList] = useState([]);
    const [userDetail, setUserDetails] = useState({});
    const [autoCompleteShow, setAutoCompleteShow] = useState(false);
    const [showAgent, setShowAgent] = useState(false);
    const [toDate, setToDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [downloadPayload, setDownloadPayload] = useState({});
    const history = useHistory();

    const getTickets = () => {
        const successHandler = (res) => {
            if (res.data && res.data) {
                setLoader(false);
                setTicketData(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
            }
        };
        const errorHandler = () => { };
        const payload = {
            ticketId: "",
            commentId: "",
            category: "",
            status: "",
            dateTo: "",
            dateFrom: "",
            project: ""
          }

        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.ticket.TICKET_LIST}?pageNo=${pageNo}&pageSize=${pageSize}`, payload);
    };

    useEffect(() => {
        getTickets();
    }, [])

    const handleDateChange = (date) => {
        setToDate(date);
        setFilter({
            ...filter,
            ["toDate"]: new Date(date),
        });
        // setFormErrors({ ...formErrors, [event.target.name]: "" });
    };

    const handleFromChange = (date) => {
        setFromDate(date);
        setFilter({
            ...filter,
            ["fromDate"]: new Date(date),
        });
    };

    const handleView = (data) => {
        history.push({ 
            pathname: '/chat-details',
            state: data,
        });
    }

    console.log(totalElements, pageSize);
    return (
        <>
            {/* <BreadCrumb heading="Transaction Report" value="Transaction Report" /> */}
            <div className="wrapper">
                <TicketHeadingWrapper>
                    <div className="flex space-between">
                    <Heading size="xl" color="color3">Ticket</Heading>
                    <span className="flex gap16">
                        <BorderBtn className="btn-soft-success" onClick={() => history.push('/create-ticket')}>
                            Create Ticket
                        </BorderBtn>
                        {/* <BorderBtn>
                            Download CSV
                        </BorderBtn> */}
                        {/* <PdfDown
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
                        /> */}
                    </span>
                    </div>
                    <TabWrapper>
                        <button className={`filter-btn${tab == "all" ? " active" : ""}`} onClick={() => setTab('all')}>All</button>
                        <button className={`filter-btn${tab == "open" ? " active" : ""}`} onClick={() => setTab('open')}>Open Tickets</button>
                        <button className={`filter-btn${tab == "close" ? " active" : ""}`} onClick={() => setTab('close')}>Close Tickets</button>
                        <button className={`filter-btn${tab == "reopen" ? " active" : ""}`} onClick={() => setTab('reopen')}>Reopen Tickets</button>
                    </TabWrapper>
                </TicketHeadingWrapper>
               
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
                                name="toDate"
                                type="date1"
                                onChange={handleDateChange}
                                placeholder="From Date"
                                value={toDate}
                            // error={formErrors.dob}
                            />
                            <MaterialInput
                                name="fromDate"
                                type="date1"
                                onChange={handleFromChange}
                                placeholder="To Date"
                                value={fromDate}
                            // error={formErrors.dob}
                            />
                            <ButtonSolid primary md>GO</ButtonSolid>
                        </div>
                    </div>
                </FilterWrapper>
                <div>
                    <TableWarpper className="mt24">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Ticket ID
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                        Priority
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Ticket Date
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Issue Category
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Request Type
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Description
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Issue Status
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Last Update
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
                                {!loader && ticketData.length ? (
                                    ticketData.map((user, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Text size="rg" color="color3">{user.ticketId}</Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.priority}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.createdAt}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.category}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.requestType}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.description}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" fw="medium" color="color3">
                                                    {user?.status}
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" fw="medium" color="color3">
                                                    {user?.updatedAt}
                                                </Text>
                                            </td>
                                            <td>
                                    <ButtonSolid primary rg onClick={() =>handleView(user)}>View</ButtonSolid>
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
                        {ticketData.length > 1 && (
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
