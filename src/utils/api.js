import Request from "./Request";
import urls from "./urls";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const getVendorListing = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_VENDOR_LISTING}`,
    params
  );
};
export const postVendorListing = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.POST_VENDOR_LISTING}`,
    params
  );
};

export const getP2pTxnListing = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.GET_P2P_TXT_DETAILS}`,
    params
  );
};

export const getPayInTxnListing = (params, pageNo) => {
  return apiRequest.post(
    `${urls.login.BASE_URL +
      urls.payout.PAYIN_TRANSACTION}?pageNo=${pageNo}&pageSize=20`,
    params
  );
};

export const getPayOutTxnListing = (params, pageNo) => {
  return apiRequest.post(
    `${urls.login.BASE_URL +
      urls.payout.TRANSACTION_REPORT}?pageNo=${pageNo}&pageSize=20`,
    params
  );
};

export const getUPIPayOutTxnListing = (params, pageNo) => {
  return apiRequest.post(
    `${urls.login.BASE_URL +
      urls.payout.UPI_TRANSACTION_REPORT}?pageNo=${pageNo}&pageSize=20`,
    params
  );
};

export const getVendorDetails = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_MAPQR_LISTING}`,
    params
  );
};

export const getUserDetails = (mobile) => {
  console.log("inside user");
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_USER_DETAILS}/${mobile}`
  );
};

export const getMapqrListing = () => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_VENDOR_DETAILS}`
  );
};

export const getVendorDetailsByID = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_MAPQR_LISTING}/${
      params.uuid
    }?pageNo=${params.pageNo}&pageSize=${params.pageSize}`
  );
};

export const uploadMapqrRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.UPLOAD_MAPQR_REQUEST}`,
    params
  );
};

export const getPTPUserTxnDetails = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.GET_DASHBOARD_USER_TXN}`,
    params
  );
};

export const getUserByVendorRole = (pageNo = 0, pageSize = 20) => {
  return apiRequest.get(
    `${urls.login.BASE_URL +
      urls.user.GET_USER_BY_VENDOR_ROLE}?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};

export const getUPIGraph = (payload) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.UPI_GRAPH_DASHBOARD}`,
    payload
  );
};

export const getPayoutGraph = (payload) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.PAYOUT_GRAPH_DASHBOARD}`,
    payload
  );
};

export const getPTPGraph = (payload) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.PTP_GRAPH_DASHBOARD}`,
    payload
  );
};

export const AddBankEntityRequest = (params, isUpdate = false) => {
  let url = urls.ptp.ADD_BANK_ENTITY;
  if (isUpdate) {
    url = urls.ptp.UPDATE_BANK_ENTITY;
  }
  return apiRequest.post(`${urls.login.BASE_URL + url}`, params);
};

export const getBankEntitiesRequest = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_BANK_ENTITY}/${
      params.userUUID
    }?pageNo=${params.pageNo}&pageSize=${params.pageSize}`
  );
};

export const bulkUploadTransactionsRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.BULK_UPLOAD_TRANSACTIONS_REQUEST}`,
    params
  );
};

export const esrowAccountDetails = (queryParams, payload) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.ESCROW_ACCOUNT_DETAILS}${queryParams}
    `,
    payload
  );
};

export const fetchPayoutReports = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.STATUS_TRANSACTION_REPORT}
    `,
    params
  );
};

export const fetchUPICollectReports = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.UPI_COLLECT_STATUS_REPORT}
    `,
    params
  );
};

export const payoutBulkUploadRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.PAYOUT_BULK_UPLOAD_URL}`,
    params
  );
};

export const payoutBulkUploadDetailsRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.PAYOUT_BULK_UPLOAD_DETAILS_URL}`,
    params
  );
};

export const jobInvokerRequest = (uuid) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.payout.JOB_INVOKER_URL}?jobName=${uuid}`,
    {}
  );
};

export const getPayoutBulkUploadedListingRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.payout.PAYOUT_BULK_UPLOADED_LISTING_URL}`,
    params
  );
};

export const getCategory = () => {
  return apiRequest.get(`${urls.login.BASE_URL + urls.ticket.GET_CATEGORY}`
  );
};

export const getStatus = () => {
  return apiRequest.get(`${urls.login.BASE_URL + urls.ticket.GET_STATUS}`
  );
};

export const getPriority = () => {
  return apiRequest.get(`${urls.login.BASE_URL + urls.ticket.GET_PRIORITY}`
  );
};

export const getRequestType = () => {
  return apiRequest.get(`${urls.login.BASE_URL + urls.ticket.GET_REQUEST_TYPE}`
  );
};

export const createTicket = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ticket.CREATE_TICKET}?ticketRequest=${params}`, {}
  );
};

export const getChatMessage = (id) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.chat.GET_MESSAGE}?pageNo=0&pageSize=100&toId=${id}`
  );
};

export const sendChatMessage = (payload) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.chat.SEND_MESSAGE}`, payload
  );
};
export const deleteCommissionPlans = (id) => {
  return apiRequest.delete(
    `${urls.login.BASE_URL + urls.commission. DELETE_COMMISSION_PLAN}/${id}`
  );
};
 export const addNewPlanRequest = (payload)=>{
       return apiRequest.post(
        `${urls.login.BASE_URL + urls.commission.ADD_NEW_PLAN}`, payload
       );
 }
 export const editCommissionPlan =(id,payload)=>{
  return apiRequest.put(`${urls.login.BASE_URL+urls.commission.EDIT_COMMISSION_PLAN}/${id}`,payload)
 }


