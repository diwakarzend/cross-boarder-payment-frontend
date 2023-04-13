// import React from "react";
// import { fetchTransactionReport } from "../../actions/payout";

// import "./Pagination.css";

// const itemPerPage = 10;

// const btnPrev = "<<Previous";
// const btnNext = "Next>>";

// const Pagination = (props) => {
//   const { pagingData, dispatch } = props;

//   const loadData = (pageNo) => {
//     dispatch(fetchTransactionReport({ status: "DONE", pageNo: pageNo }));
//   };
//   console.log("pagingData", pagingData);
//   // const { number } = pagingData;

//   const numberOfElements = pagingData && pagingData.numberOfElements;
//   const totalElements = pagingData && pagingData.totalElements;
//   const pageno = pagingData && pagingData.number;

//   if (numberOfElements == totalElements) {
//     return "";
//   }

//   const pages = [];
//   if (pageno == 0) {
//     pages.push(
//       <button disabled={true} className="btn-common disabled">
//         {btnPrev}
//       </button>
//     );
//   }

//   if ((pageno + 1) * itemPerPage <= totalElements) {
//     if (pageno > 0) {
//       pages.push(
//         <button onClick={() => loadData(pageno - 1)} className="btn-common">
//           {btnPrev}
//         </button>
//       );
//     }
//     pages.push(
//       <button onClick={() => loadData(pageno + 1)} className="btn-common">
//         {btnNext}
//       </button>
//     );
//   } else {
//     pages.push(
//       <button onClick={() => loadData(pageno - 1)} className="btn-common">
//         {btnPrev}
//       </button>
//     );
//     pages.push(
//       <button disabled={true} className="btn-common disabled">
//         {btnNext}
//       </button>
//     );
//   }
//   return <footer className="footer ptb-20">{pages}</footer>;
// };

// export default Pagination;
