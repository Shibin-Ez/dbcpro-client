import { useState, useEffect } from "react";
import DashHeader from "../DashboardPage/DashHeader";
import OptionExpand from "./OptionExpand";
import { useSelector } from "react-redux";

const CustomersPage = () => {
  
  const [users, setUsers] = useState([]);
  const SERVER_URL = useSelector((state) => state.url);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${SERVER_URL}/users`, {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <DashHeader />
      <table>
        <tr>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>PHONE NO</th>
          <th>DATE OF SIGN UP</th>
          <th>ADDRESS</th>  
        </tr>

        {users.map((user, index) => {
          return (
            <OptionExpand
              user={user}
              index={index}
            />
          );
        })}
      </table>
    </div>
  );
};

export default CustomersPage;
