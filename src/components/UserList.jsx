import { useEffect, useState } from "react";

import { users as userList } from "../constant/users";
import { getEmailAndDateArray ,handleSort } from "../helper/helper";

function UserList() {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const emailAndDateArray = getEmailAndDateArray(userList);
    setUsers(emailAndDateArray);
  }, []);

  const handleSortClick = (property) => {
    const sortedUsers = handleSort(users, property, sortBy);
    setUsers(sortedUsers);
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  return (
    <div>
       <div>
        <button onClick={() => handleSortClick("email")}>Sort by Email {sortBy === "asc" ? "(Asc)" : "(Desc)"}</button>
        <button onClick={() => handleSortClick("date")}>Sort by Date {sortBy === "asc" ? "(Asc)" : "(Desc)"}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
