import { useState } from "react";
import dateFormat from "../DashboardPage/dateFormat.js";

const OptionExpand = ({ user, index }) => {
  const [ userDate, userTime ] = dateFormat(user.createdAt);

  const moreOptions = () => {};

  return (
    <>
      <tr className="dash-tr" onClick={moreOptions} id={index}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.phoneNo}</td>
        <td>
          {userDate} <br />
          <span className="dash-time">{userTime}</span>
        </td>
        <td>{user.address}</td>
      </tr>
    </>
  );
};

export default OptionExpand;
