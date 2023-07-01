export default {
  login: {
    BASE_URL:"",
    //BASE_URL: "https://p2p-api.texta.info",

    LOGIN_REQUEST: "/api/authenticate",
    OTP_VALIDATION: "/agent/otp/validation",
    LOGIN_OTP_RESEND: "/agent/otp/resend",
    FETCH_USER_PROFILE: "/user/getUserProfile",
    GET_PROFILE: "/api/user/account",
    GET_WALLET: "/api/wallet",
    GET_API_USERS: "/api/users?pageSize=100",
    RESET_PASSWORD: "/api/user/account/reset-password/init",
    UPDATE_PASSWORD: "/api/user/account/reset-password/finish",
    CHANGE_PASSWORD: "/api/user/account/change-password",
  },

  User: {
    USER_LIST: "/api/users",
    TRANSACTION_LIST: "/api/transaction-report",
    API_LIST: "/api/ip",
    API_LIST_UPDATE: "/api/update-ip",
    CREATE_NEW_USER: "/api/user/register",
    UPDATE_USER: "/api/update-users",
    DELETE_USER: "/api/delete-users/",
    EDIT_USER: "/api/users/search/{userId}",
    ADD_BENEFICIARY: "/api/add-beneficiary",
    UPDATE_BENEFICIARY: "/api/update-beneficiary",
    GET_BENEFICIARY: "/api/beneficiary?pageNo=0&pageSize=100",
    SAVE_FDETAILS: "/api/user/save-financial-details",
    GET_FDETAILS: "/api/user/financial-details",
    SEARCH_USER: "/api/users/search",
    GET_ALL_PERMISISSIONS: "/api/user/mapping",
    MANAGE_USER_PERMISSIONS: "/api/user/mapping-api",
    MANAGE_USER_STATUS: "/api/user/user-status",
    GET_CITY: "/api/city/list",
    GET_STATE: "/api/state/list",
    GET_ROLE: "/api/role/list",
    DASHBOARD: "/api/dashboard",
    WALLET_BALANCE: "/api/wallet"
  },

  OperatorList: {
    OPERATOR_LIST: "/api/operator/",
  },

  ServiceList: {
    SERVICE_LIST: "/api/service/list",
  },

  Wallet: {
    WALLET_SUMMARY: "/api/admin/retailerWalletDetail",
    RBL_WALLET_SUMMARY: "/api/get-account-balance",

    // ADD_CREDIT: "/api/wallet/deposit",
    // DEDUCT_CREDIT: "/api/wallet/debit",
    MANAGE_WALLET: "/api/wallet/{actionType}",
    VIEW_TRANSACTIONS: "/api/wallet/transactions/{userId}",
    FUND_REQUEST: "/api/wallet/fund-request",
    FETCH_FUND_REQUEST: "/api/wallet/fund-request-list?pageNo=0&pageSize=100",
    FUND_REQUEST_APPROVE: "/api/wallet/fund-approve?reqstfunduuid=",
    FUND_REQUEST_REJECT: "/api/wallet/reject-fund-request?reqstfunduuid=",
  },
  payout: {
    ADD_PAYOUT: "/api/user/initiate-single-payment",
    GET_PAYOUT_STATUS: "/api/user/get-payment-status",
    VALIDATE_VPA: "/api/upi/validate-vpa",
    UPI_INIT_PAYMENT: "/api/upi/init-payment",
    UPI_COMPLETE_PAYMENT: "/api/upi/complete-payment",
    TRANSACTION_REPORT: "/api/payout/transaction-report",
    UPI_TRANSACTION_REPORT: "/api/upi/upipayment-transaction-report",
    UPI_COLLECT_STATUS_REPORT: "/api/upi/collect-status-report",
    PAYOUT_BULK_UPLOAD_URL: "/api/upload/payout-csv",
    PAYOUT_BULK_UPLOAD_DETAILS_URL: "/api/upload/uploadFile-detail",
    PAYOUT_BULK_UPLOADED_LISTING_URL: "/payment-finance-service",
    JOB_INVOKER_URL: '/api/job/invoke',
    // MONTHLY_REPORT: "/api/payout/dashboard/monthly-report",
    // STATUS_REPORT: "/api/payout/dashboard/status-report",
    STATUS_TRANSACTION_REPORT:
      "/api/payout/dashboard/status-transaction-report",
    COMMISSION_RANGE: "/api/user/payout/commission-range",
    UPDATE_COMMISION: "/api/user/payout/update-commission",
    PAYIN_TRANSACTION: "/api/upi/collect-transaction-report",
    UPI_GRAPH_DASHBOARD: "/api/upi/collect-graph",
    PAYOUT_GRAPH_DASHBOARD: "/api/payout/daywise-graph-report",
    PTP_GRAPH_DASHBOARD: "/api/merchant/ptp-usertxn-graph",
    ESCROW_ACCOUNT_DETAILS: "/api/account-statement-report",
  },
  userCommission: {
    GET_USERCOMMISSION: "/api/user/comission",
    UPDATE_USERCOMMISSION: "/api/user/comission/update",
    ADD_COMMISSION: "/api/user/comission/create-new-user-commission",
  },

  transactionList: {
    GET_TRANSACTION: "/api/report/admin/transactions",
  },
  ptp: {
    GET_VENDOR_LISTING: "/api/ptp/vendor-details",
    POST_VENDOR_LISTING: "/api/ptp/create-ptp",
    GET_P2P_TXT_DETAILS: "/api/merchant/usertxn/details",
    GET_MAPQR_LISTING: "/api/ptp/ptp-details",
    UPLOAD_MAPQR_REQUEST: "/api/ptp/uploadQRCode",
    GET_DASHBOARD_USER_TXN: "/api/merchant/usertxn/dashboard",
    ADD_BANK_ENTITY: "/api/ptp/create-ptpbank",
    UPDATE_BANK_ENTITY: "/api/ptp/update-bank-details",
    GET_BANK_ENTITY: "/api/ptp/bank-details",
    BULK_UPLOAD_TRANSACTIONS_REQUEST: "/api/merchant/bulkUploadTransactions",
  },
  user: {
    GET_USER_DETAILS: "/api/users/search",
    GET_VENDOR_DETAILS: "/api/users?pageSize=100",
    GET_USER_BY_VENDOR_ROLE: "/api/users/searchByVendor",
  },
  ticket: {
    TICKET_LIST: "/admin/ticket/list",
    GET_CATEGORY: "/admin/ticket/category",
    GET_PRIORITY: "/admin/ticket/priority",
    GET_REQUEST_TYPE: "/admin/ticket/request-type",
    GET_STATUS: "/admin/ticket/status",
    CREATE_TICKET: "/admin/ticket/create",
  },
  chat: {
    GET_MESSAGE: "/chatbox/message",
    SEND_MESSAGE: "/chatbox/save",
  }
};
