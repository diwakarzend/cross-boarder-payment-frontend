import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Heading, TableWarpper, Text, IconInactive, ButtonSolid } from "../../Components/styledConstants";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import PdfDown from "../../Components/ExportFiles/PdfDown";
import CsvDown from "../../Components/ExportFiles/CsvDown";

import IconActive from "../../assests/images/Icons/IconActive";
import Pagination from "../../Components/Common/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ItemPerPage from "../../Components/Common/ItemPerPage";
import { getParams } from "../../utils/common";
import { HeadingWrapper, FilterWrapper, AdvanceFilterWrapper } from "./style";
import MaterialInput from "../../Components/Common/Form";
import TableLoader from "../../Components/Common/TableLoader";
import { deleteCommissionPlans } from "../../utils/api";
import AddNewPlanForm from "./AddNewPlanForm";
import EditNewPlanForm from "./EditNewPlanForm";

const headers = [
    { label: "PlanName", key: "planName" },
    { label: "Pay In Commission", key: "payIn" },
    { label: "Pay Out Commission", key: "payOut" },
    
];

const tableHeader = [
    {
        planName: "Plan Name",
        payIn: "Pay In Commission",
        payOut: "Pay Out Commission",
       
    },
];

const getTableBody = (data) => {
    const tableBody = [];
    data.forEach((element) => {
        tableBody.push({
            planName: element.planName,
            payIn: element.payIn,
            payOut: element.payOut,
        });
    });

    return tableBody;
};
const updateFormata = {
    id:"",
    planName:"",
    payIn:"",
    payOut:""
  }

export default function CommissionPlan() {
    const [formData, setFormData] = useState({
        fromDate: "",
        mobileNumber: "",
        toDate: "",
        txnId: "",
        txnType: "",
        utrNumber: ""
    });
    const[deleteplan,setDeletePlan]=useState()
    const [filter, setFiler] = useState()
    const [userData, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loader, setLoader] = useState(false);
    const [totalElements, setTotalElements] = useState(500);
    const [toDate, setToDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [downloadPayload, setDownloadPayload] = useState({});
    const[isPopShow,setPopupShow]=useState(false);
    const [trackUpdate, setTrackUpdate] =useState({})
    const[updatedata,setupdateData]=useState(updateFormata)
    const[editData,setEditData] = useState({})
    
    const history = useHistory();

    const getCommissionPlans = () => {
        const successHandler = (res) => {
            if (res.data && res.data.content) {
                setLoader(false);
                setUsers(res.data.content);
                console.log("rest",res.data.content)
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
            }
        };
        const errorHandler = () => { };

        // const params = getParams(controls);
        const payload = {
            fromDate: formData?.fromDate,
            mobileNumber: formData?.mobileNumber,
            toDate: formData?.toDate,
            txnId: formData?.txnId,
            txnType: formData?.txnType,
            utrNumber: formData?.utrNumber,
        }
        console.log('inside', currentPage)
        const api = new Request("", successHandler, errorHandler, false);
        return api.get(`${urls.login.BASE_URL}${urls.commission.GET_COMMISSION_PLAN}?pageNo=${currentPage}&pageSize=${pageSize}`);
        // return api.post(`${Config.apis.admin.USER_LIST}?pageNo=${currentPage}&pageSize=${pageSize}`, params);
    };

    const handleFromDateChange = (date) => {
        setFromDate(date);
        setFormData({
            ...formData,
            ["fromDate"]: moment(date).format('YYYY-MM-DD'),
        });
        // setFormErrors({ ...formErrors, "fromDate": "" });
    };

    const handleToDateChange = (date) => {
        setToDate(date);

        setFormData({
            ...formData,
            ["toDate"]: moment(date).format('YYYY-MM-DD'),
        });
        // setFormErrors({ ...formErrors, "toDate": "" });
    };

    const handleDelete = (id) => {
       deleteCommissionPlans(id).then((res)=>{
                console.log("resp",res)
                setDeletePlan(res)
       })
        
    }
    const handleEdit =(item)=>{
        setIsOpen(true)
        setupdateData(item);
        console.log("hello",updatedata);

    }
     

    const handleAdvanceFilter = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    useEffect(() => {
        getCommissionPlans()
    }, [currentPage, pageSize,deleteplan,trackUpdate,editData])
   
   
    const handleNewPlan=()=>{
        setPopupShow(true)
    }

    return (
        <>
            {/* <BreadCrumb heading="Transaction Report" value="Transaction Report" /> */}
            <div className="wrapper">
                <HeadingWrapper>
                    <Heading size="xl" color="color3">Commission Plans</Heading>
                    <span className="flex" style={{gap:"2%"}}>
                        <ButtonSolid primary onClick={handleNewPlan}>Add New Plan</ButtonSolid>
                        <PdfDown
                            tableHeader={tableHeader}
                            getTableBody={getTableBody}
                            url={`${urls.login.BASE_URL}${urls.commission.GET_COMMISSION_PLAN}?pageNo=${currentPage}&pageSize=${pageSize}`}
                            params={downloadPayload}
                            heading="Commission Plan"
                            fileName="commissionPlan"
                            method= "get"
                        />
                        <CsvDown
                            headers={headers}
                            url={`${urls.login.BASE_URL}${urls.commission.GET_COMMISSION_PLAN}?pageNo=${currentPage}&pageSize=${pageSize}`}
                            params={downloadPayload}
                            reportName="commissionplan.csv"
                            method="get"
                        />
                    </span>
                </HeadingWrapper>
                <FilterWrapper>
                    <div className="search">
                        <label>Search by Plan Name</label>
                        <input
                            name="utrNumber"
                            type="text"
                            className=""
                            placeholder="Plan Name"
                            onChange={handleAdvanceFilter}
                            value={formData?.utrNumber}
                        />
                    </div>
                    <div className="search">
                        <label>Filter by</label>
                        <div className="field">
                            <MaterialInput
                                name="fromDate"
                                type="date1"
                                onChange={handleFromDateChange}
                                placeholder="From Date"
                                value={fromDate}
                            />
                            <MaterialInput
                                name="toDate"
                                type="date1"
                                onChange={handleToDateChange}
                                placeholder="To Date"
                                value={toDate}
                            />
                            <ButtonSolid primary md onClick={getCommissionPlans}>GO</ButtonSolid>
                        </div>
                    </div>

                    {/* <ButtonSolid md onClick={() => setIsOpen(true)}>Advance Search</ButtonSolid> */}

                </FilterWrapper>
                {isOpen &&
                    <AdvanceFilterWrapper>
                        <div className="flex space-between mb10 heading-box">
                            <Heading size="xl" color="color3">Advance Search</Heading>
                            <button className="btn" onClick={() => setIsOpen(false)}><i className="fa fa-close"></i></button>
                        </div>
                        <div className="box">
                            <label>Transaction Id</label>
                            <input
                                name="txnId"
                                type="text"
                                className=""
                                placeholder="Transaction Id"
                                onChange={handleAdvanceFilter}
                                value={formData?.txnId}
                            />
                        </div>
                        <div className="box">
                            <label>Transaction Type</label>
                            <select onChange={handleAdvanceFilter} name="txnType">
                                <option value=""></option>
                                <option value="CREDIT">CREDIT</option>
                                <option value="DEBIT">DEBIT</option>
                            </select>
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
                        <ButtonSolid primary md onClick={getCommissionPlans}>GO</ButtonSolid>
                    </AdvanceFilterWrapper>
                }
                <div>
                    <TableWarpper className="mt24">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Plan Name
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Pay In Commission
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="rg" fw="medium" color="color7">
                                            Pay Out Commission
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
                                                <Text size="rg" color="color3">{user.planName}</Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.payIn}
                                                    <span>%</span>
                                                </Text>
                                            </td>
                                            <td>
                                                <Text size="xsm" color="color3">
                                                    {user?.payOut}
                                                    <span>%</span>
                                                </Text>
                                            </td>
                                            <td className="flex" style={{gap:"4px" }}>
                                                <ButtonSolid primary rg  onClick={() => handleDelete(user?.id)}>Delete</ButtonSolid>
                                                <ButtonSolid primary rg  onClick={()=>handleEdit(user)}>Edit</ButtonSolid>
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




               {isPopShow? <AddNewPlanForm setIsPopupShow ={setPopupShow} setTrackUpdate={setTrackUpdate} />:""}
              {isOpen? <EditNewPlanForm setIsOpen ={setIsOpen} updatedata={updatedata}  setEditData={setEditData}/>:""}
            </div>
        </>
    );
}
