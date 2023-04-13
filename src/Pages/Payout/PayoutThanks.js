import React, { memo } from "react";

const PayoutThanks = memo(({ paymentMethod, payoutSuccessData }) => {
  const { transsactionId, amount } = payoutSuccessData;

  console.log("payoutSuccessData", payoutSuccessData);

  const dateTimeString = new Date().toString().split("GMT+0530")[0];

  return (
    <div className="col-md-12">
      <div class="form-group quick-payment-successfull">
        <img src="/images/success.png" width="150" />
        <p
          style={{
            fontSize: "33px",
            fontWeight: "bold",
          }}
        >
          ₹ {amount}
        </p>
        <h4 class="payment-title">Success</h4>
        <p
          style={{
            fontSize: "18px",
          }}
        >
          Transaction Id: {transsactionId}
        </p>
        <p
          style={{
            fontSize: "15px",
          }}
        >
          {dateTimeString}
        </p>
      </div>
    </div>
  );
});

export default PayoutThanks;
