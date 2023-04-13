import React from "react";
import IconP2PTransfer from "../../assests/images/Icons/IconP2PTransfer";

export const IconMap = {
  iconDashboard: <i className="fa fa-television" aria-hidden="true"></i>,
  iconManage: <i className="fa fa-user-circle" aria-hidden="true"></i>,
  IconP2PTransfer: <i className="fa fa-users" aria-hidden="true"></i>,
  IconPayIn: <i className="fa fa-check-circle" aria-hidden="true"></i>,
  IconPayments: <i className="fa fa-inr" aria-hidden="true"></i>,
  IconMPQR: <i className="fa fa-qrcode" aria-hidden="true"></i>,
  IconSettings: <i className="fa fa-cog" aria-hidden="true"></i>,
  IconReports: <i className="fa fa-file-pdf-o" aria-hidden="true"></i>,
};

export const Navigation = [
  {
    title: "Dashboard",
    link: "/dashboard",
    active: true,
    default: true,
    icon: "iconDashboard",
    subNav: [],
  },
  {
    title: "Manage Merchant",
    link: "",
    active: false,
    applicableRoles: ["PTM_ADMIN"],
    icon: "iconManage",
    subNav: [
      {
        title: "Manage Users",
        link: "/users",
        active: false,
        applicableRoles: ["PTM_ADMIN"],
        subNav: [],
      },
    ],
  },

  {
    title: "PayIn",
    link: "",
    active: false,
    applicableRoles: ["PTM_ADMIN", "PTM_VENDOR"],
    icon: "IconPayIn",
    subNav: [
      {
        title: "Transaction Report",
        link: "/payin-transaction",
        active: false,
        applicableRoles: ["PTM_ADMIN"],
        subNav: [],
      },
    ],
  },
  {
    title: "Payout",
    link: "",
    active: false,
    icon: "IconP2PTransfer",
    applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
    subNav: [
      {
        title: "Fund Request",
        link: "/fund-request",
        active: false,
        applicableRoles: ["PTM_FUND_REQUEST"],
        subNav: [],
      },
      {
        title: "Beneficiary",
        link: "/beneficiary",
        active: false,
        applicableRoles: ["PTM_VENDOR"], // need to show this for vendor only
        subNav: [],
      },
      {
        title: "Commission",
        link: "/vendor-commission",
        active: false,
        applicableRoles: ["PTM_PAYOUT_RANGE"], // do not show for vendor
        subNav: [],
      },
      {
        title: "Transaction Report",
        link: "/payout-reports",
        active: false,
        applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
        subNav: [],
      },
      {
        title: "UPI Transactions",
        link: "/payout-reports-upi",
        active: false,
        applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
        subNav: [],
      },
    ],
  },
  //   {
  //     title: "Transaction Report",
  //     link: "/payout-reports",
  //     active: false,
  //     icon: "IconReports",
  //     applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
  //     subNav: [],
  //   },

  {
    title: "P2P",
    link: "",
    active: false,
    icon: "IconP2PTransfer",
    applicableRoles: ["PTM_ADMIN"],
    subNav: [
      {
        title: "Map Vendor QR",
        link: "/mapqr-list",
        active: false,
        // icon: "IconMPQR",
        applicableRoles: ["PTM_ADMIN"],
        subNav: [],
      },
      {
        title: "Bank Entity",
        link: "/bank-entity",
        active: false,
        //  icon: "IconReports",
        applicableRoles: ["PTM_ADMIN"],
      },
      {
        title: "Transaction Report",
        link: "/p2p-transaction",
        active: false,
        applicableRoles: ["PTM_ADMIN"],
        subNav: [],
      },
    ],
  },

  {
    title: "Escrow",
    link: "/escrow-reports",
    active: false,
    default: true,
    icon: "IconP2PTransfer",
    subNav: [],
    applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
  },

  {
    title: "API Docs",
    link: "/api-docs",
    active: false,
    default: true,
    icon: "IconP2PTransfer",
    subNav: [],
    applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
  },
  {
    title: "Settings",
    link: "/settings",
    active: false,
    default: true,
    icon: "IconSettings",
    subNav: [],
    applicableRoles: ["PTM_VENDOR", "PTM_ADMIN"],
  },
];
