import React from "react";
import Loader from "../Loader";

export default function TableLoader() {
  return (
    <tr>
      <td colSpan="10" style={{ height: "500px" }}>
        <Loader />
      </td>
    </tr>
  );
}
