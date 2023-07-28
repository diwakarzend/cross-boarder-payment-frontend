import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import LoginPageLoadable from "../Pages/LoginPage/LoginPage";
import DashboardLoadable from "../Pages/DashBoard/DashboardLoadable";
import UsersLoadable from "../Pages/Usersold/UsersLoadable";
import UPI from "../Pages/UPI/UPI";
import AddMoneyLoadable from "../Pages/AddMoney/AddMoneyLoadable";
import FundRequestLoadable from "../Pages/FundRequest/FundRequestLoadable";
import BeneficiaryLoadable from "../Pages/Benificiary/BeneficiaryLoadable";
import ReportsLoadable from "../Pages/Payout/ReportsLoadable";
import ReportsLoadableUPI from "../Pages/Payout/ReportsLoadableUPI";

import SettingsLodable from "../Pages/Settings/SettingsLodable";
import CommissionPlan from "../Pages/Commission/CommissionPlan";
import MapQRPageLoadable from "../Pages/MapQR/MapqrLoadable";
import MapQRListLoadable from "../Pages/MapQR/MapQRListLoadable";
import VendorListLoadable from "../Pages/MapQR/VendorListLoadable";
import P2PLoadable from "../Pages/P2PTransaction/P2PLoadable";
import PayInLoadable from "../Pages/Payin/PayinLoadable";

import BankEntityLoadable from "../Pages/BankEntity/BankEntityLoadable";
import ApiDocsLoadable from "../Pages/ApiDocs/ApiDocsLoadable";
import EscrowReports from "../Pages/Payout/EscrowReports";

import PayoutBulkUpload from "../Pages/PayoutBulkUpload";
import CreateUser from "../Pages/Users/CreateUser";
import UserList from "../Pages/Users/UserList";
import TransactionList from "../Pages/Transaction";
import TicketManagement from "../Pages/HelpandSupport/TicketManagement";
import TicketList from "../Pages/HelpandSupport/Ticket";
import AddTopic from "../Pages/HelpandSupport/AddTopic";
import AddQuestion from "../Pages/HelpandSupport/AddQuestion";
import CreateTicket from "../Pages/HelpandSupport/CreateTicket";
import Chat from "../Pages/HelpandSupport/Chat";
import MerchantList from "../Pages/Commission/MerchantList";
import FraudPrevention from "../Pages/FraudPrevention";

const Routes = (props) => {
  return (
      <Switch>
        <Route path="/" component={LoginPageLoadable} exact />
        <PrivateRoute path="/dashboard" component={DashboardLoadable} exact />
        <PrivateRoute path="/upi" component={UPI} exact />
        <PrivateRoute path="/add/money" component={AddMoneyLoadable} exact />
        <PrivateRoute path="/users" component={UsersLoadable} exact />
        <PrivateRoute
          path="/fund-request"
          component={FundRequestLoadable}
          exact
        />
        <PrivateRoute
          path="/beneficiary"
          component={BeneficiaryLoadable}
          exact
        />
        <PrivateRoute
          path="/payout-reports"
          component={ReportsLoadable}
          exact
        />
        <PrivateRoute
          path="/payout-reports-upi"
          component={ReportsLoadableUPI}
          exact
        />
        <PrivateRoute path="/settings" component={SettingsLodable} exact />
        <PrivateRoute
          path="/commission-plan"
          component={CommissionPlan}
          exact
        />
        <PrivateRoute
          path="/merchant-list"
          component={MerchantList}
          exact
        />
        <PrivateRoute
          path="/payin-transaction"
          component={PayInLoadable}
          exact
        />
        <PrivateRoute path="/p2p-transaction" component={P2PLoadable} exact />
        <PrivateRoute path="/escrow-reports" component={EscrowReports} exact />
        <PrivateRoute path="/mapqr-list" component={MapQRListLoadable} exact />
        <PrivateRoute path="/mapqr-add" component={MapQRPageLoadable} exact />
        <PrivateRoute
          path="/vendor-list"
          component={VendorListLoadable}
          exact
        />
        <PrivateRoute
          path="/bank-entity"
          component={BankEntityLoadable}
          exact
        />
        <PrivateRoute path="/api-docs" component={ApiDocsLoadable} exact />
        <PrivateRoute path="/payout-bulk-upload" component={PayoutBulkUpload} exact />

        <PrivateRoute path="/create-user" component={CreateUser} exact />
        <PrivateRoute path="/users-list" component={UserList} exact />
        <PrivateRoute path="/transaction" component={TransactionList} exact />
        <PrivateRoute path="/fraud-prevention" component={FraudPrevention} exact />

        <PrivateRoute path="/ticket-management" component={TicketManagement} exact />
        <PrivateRoute path="/ticket-list" component={TicketList} exact />
        <PrivateRoute path="/new-topic" component={AddTopic} exact />
        <PrivateRoute path="/new-question" component={AddQuestion} exact />
        <PrivateRoute path="/create-ticket" component={CreateTicket} exact />
        <PrivateRoute path="/chat-details" component={Chat} exact />
      </Switch>
  );
};

export default Routes;
