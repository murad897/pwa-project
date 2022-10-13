import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserContextPorvider = ({ children }) => {
  const [users, setUsers] = useState([
    "4234",
    "gdfgdf",
    "gdfgdfgd",
    "4234",
    "gdfgdf",
    "gdfgdfgd",
    "4234",
    "gdfgdf",
    "gdfgdfgd",
  ]);

  const [user, setUser] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filterUsers = (value) => {
    const filteredUsers = users.filter((item) =>
      item.includes(value.toLowerCase().trim())
    );
    setFilteredUsers(filteredUsers);
    setSearchText(value);
  };


  return (
    <UsersContext.Provider
      value={{ users, filterUsers, filteredUsers, searchText, user }}
    >
      {children}
    </UsersContext.Provider>
  );
};
