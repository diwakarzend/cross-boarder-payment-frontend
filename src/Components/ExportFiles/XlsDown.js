import React from "react";
import Request from "../../utils/Request";
import { ExportToExcel } from "./ExportToExcel";
// import config from "../../utils/config";

const XLSDOWN = ({ fileName, url }) => {
  const [data, setData] = React.useState([]);
  // const fileName = "myfile"; // here enter filename for your excel file
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const successHandler = (res) => {
      console.log("this success function is called!!");
      if (res) {
        console.log("res===>", res);
        setData(res);
      }
    };
    const errorHandler = () => {};
    const api = new Request("", successHandler, errorHandler, false);
    const res = api.get(url);
  };

  return <ExportToExcel apiData={data} fileName={fileName}  />;
};

export default XLSDOWN;
