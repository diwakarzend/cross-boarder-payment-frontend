export default {
  login: {
   
    BASE_URL: "https://p2p-api.texta.info",

    LOGIN_REQUEST: "/payment-finance-service/api/authenticate",
    OTP_VALIDATION: "/payment-finance-service/agent/otp/validation",
    LOGIN_OTP_RESEND: "/payment-finance-service/agent/otp/resend",
    FETCH_USER_PROFILE: "/payment-finance-service/user/getUserProfile",
    GET_PROFILE: "/payment-finance-service/api/user/account",
    GET_WALLET: "/payment-finance-service/api/wallet",
    GET_API_USERS: "/payment-finance-service/api/users?pageSize=100",
    RESET_PASSWORD: "/payment-finance-service/api/user/account/reset-password/init",
    UPDATE_PASSWORD: "/payment-finance-service/api/user/account/reset-password/finish",
    CHANGE_PASSWORD: "/payment-finance-service/api/user/account/change-password",
  },

  User: {
    USER_LIST: "/payment-finance-service/api/users",
    TRANSACTION_LIST: "/payment-finance-service/api/transaction-report",
    API_LIST: "/payment-finance-service/api/ip",
    API_LIST_UPDATE: "/payment-finance-service/api/update-ip",
    CREATE_NEW_USER: "/payment-finance-service/api/user/register",
    UPDATE_USER: "/payment-finance-service/api/update-users",
    DELETE_USER: "/payment-finance-service/api/delete-users/",
    EDIT_USER: "/payment-finance-service/api/users/search/{userId}",
    ADD_BENEFICIARY: "/payment-finance-service/api/add-beneficiary",
    UPDATE_BENEFICIARY: "/payment-finance-service/api/update-beneficiary",
    GET_BENEFICIARY: "/payment-finance-service/api/beneficiary?pageNo=0&pageSize=100",
    SAVE_FDETAILS: "/payment-finance-service/api/user/save-financial-details",
    GET_FDETAILS: "/payment-finance-service/api/user/financial-details",
    SEARCH_USER: "/payment-finance-service/api/users/search",
    GET_ALL_PERMISISSIONS: "/payment-finance-service/api/user/mapping",
    MANAGE_USER_PERMISSIONS: "/payment-finance-service/api/user/mapping-api",
    MANAGE_USER_STATUS: "/payment-finance-service/api/user/user-status",
    GET_CITY: "/payment-finance-service/api/city/list",
    GET_STATE: "/payment-finance-service/api/state/list",
    GET_ROLE: "/payment-finance-service/api/role/list",
    DASHBOARD: "/payment-finance-service/api/dashboard",
    WALLET_BALANCE: "/payment-finance-service/api/wallet"
  },

  OperatorList: {
    OPERATOR_LIST: "/payment-finance-service/api/operator/",
  },

  ServiceList: {
    SERVICE_LIST: "/payment-finance-service/api/service/list",
  },

  Wallet: {
    WALLET_SUMMARY: "/payment-finance-service/api/admin/retailerWalletDetail",
    RBL_WALLET_SUMMARY: "/payment-finance-service/api/get-account-balance",

    // ADD_CREDIT: "/payment-finance-service/api/wallet/deposit",
    // DEDUCT_CREDIT: "/payment-finance-service/api/wallet/debit",
    MANAGE_WALLET: "/payment-finance-service/api/wallet/{actionType}",
    VIEW_TRANSACTIONS: "/payment-finance-service/api/wallet/transactions/{userId}",
    FUND_REQUEST: "/payment-finance-service/api/wallet/fund-request",
    FETCH_FUND_REQUEST: "/payment-finance-service/api/wallet/fund-request-list?pageNo=0&pageSize=100",
    FUND_REQUEST_APPROVE: "/payment-finance-service/api/wallet/fund-approve?reqstfunduuid=",
    FUND_REQUEST_REJECT: "/payment-finance-service/api/wallet/reject-fund-request?reqstfunduuid=",
  },
  payout: {
    ADD_PAYOUT: "/payment-finance-service/api/user/initiate-single-payment",
    GET_PAYOUT_STATUS: "/payment-finance-service/api/user/get-payment-status",
    VALIDATE_VPA: "/payment-finance-service/api/upi/validate-vpa",
    UPI_INIT_PAYMENT: "/payment-finance-service/api/upi/init-payment",
    UPI_COMPLETE_PAYMENT: "/payment-finance-service/api/upi/complete-payment",
    TRANSACTION_REPORT: "/payment-finance-service/api/payout/transaction-report",
    UPI_TRANSACTION_REPORT: "/payment-finance-service/api/upi/upipayment-transaction-report",
    UPI_COLLECT_STATUS_REPORT: "/payment-finance-service/api/upi/collect-status-report",
    PAYOUT_BULK_UPLOAD_URL: "/payment-finance-service/api/upload/payout-csv",
    PAYOUT_BULK_UPLOAD_DETAILS_URL: "/payment-finance-service/api/upload/uploadFile-detail",
    PAYOUT_BULK_UPLOADED_LISTING_URL: "/payment-finance-service",
    JOB_INVOKER_URL: '/api/job/invoke',
    // MONTHLY_REPORT: "/payment-finance-service/api/payout/dashboard/monthly-report",
    // STATUS_REPORT: "/payment-finance-service/api/payout/dashboard/status-report",
    STATUS_TRANSACTION_REPORT:
      "/api/payout/dashboard/status-transaction-report",
    COMMISSION_RANGE: "/payment-finance-service/api/user/payout/commission-range",
    UPDATE_COMMISION: "/payment-finance-service/api/user/payout/update-commission",
    PAYIN_TRANSACTION: "/payment-finance-service/api/upi/collect-transaction-report",
    UPI_GRAPH_DASHBOARD: "/payment-finance-service/api/upi/collect-graph",
    PAYOUT_GRAPH_DASHBOARD: "/payment-finance-service/api/payout/daywise-graph-report",
    PTP_GRAPH_DASHBOARD: "/payment-finance-service/api/merchant/ptp-usertxn-graph",
    ESCROW_ACCOUNT_DETAILS: "/payment-finance-service/api/account-statement-report",
  },
  userCommission: {
    GET_USERCOMMISSION: "/payment-finance-service/api/user/comission",
    UPDATE_USERCOMMISSION: "/payment-finance-service/api/user/comission/update",
    ADD_COMMISSION: "/payment-finance-service/api/user/comission/create-new-user-commission",
  },

  transactionList: {
    GET_TRANSACTION: "/payment-finance-service/api/report/admin/transactions",
  },
  ptp: {
    GET_VENDOR_LISTING: "/payment-finance-service/api/ptp/vendor-details",
    POST_VENDOR_LISTING: "/payment-finance-service/api/ptp/create-ptp",
    GET_P2P_TXT_DETAILS: "/payment-finance-service/api/merchant/usertxn/details",
    GET_MAPQR_LISTING: "/payment-finance-service/api/ptp/ptp-details",
    UPLOAD_MAPQR_REQUEST: "/payment-finance-service/api/ptp/uploadQRCode",
    GET_DASHBOARD_USER_TXN: "/payment-finance-service/api/merchant/usertxn/dashboard",
    ADD_BANK_ENTITY: "/payment-finance-service/api/ptp/create-ptpbank",
    UPDATE_BANK_ENTITY: "/payment-finance-service/api/ptp/update-bank-details",
    GET_BANK_ENTITY: "/payment-finance-service/api/ptp/bank-details",
    BULK_UPLOAD_TRANSACTIONS_REQUEST: "/payment-finance-service/api/merchant/bulkUploadTransactions",
  },
  user: {
    GET_USER_DETAILS: "/payment-finance-service/api/users/search",
    GET_VENDOR_DETAILS: "/payment-finance-service/api/users?pageSize=100",
    GET_USER_BY_VENDOR_ROLE: "/payment-finance-service/api/users/searchByVendor",
  },
  ticket: {
    TICKET_LIST: "/support-service/support-service/admin/ticket/list",
    GET_CATEGORY: "/support-service/admin/ticket/category",
    GET_PRIORITY: "/support-service/admin/ticket/priority",
    GET_REQUEST_TYPE: "/support-service/admin/ticket/request-type",
    GET_STATUS: "/support-service/admin/ticket/status",
    CREATE_TICKET: "/support-service/admin/ticket/create",
  }
};
