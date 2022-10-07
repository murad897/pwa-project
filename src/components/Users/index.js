import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Searcher from "../Searcher";
import User from "./User";
import { useStyles } from "./UsersStyles";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const Users = () => {
  const { users } = useContext(UsersContext);
  const { searchText } = useContext(UsersContext);
  const { filteredUsers } = useContext(UsersContext);

  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Box>
        <Typography>Users :</Typography>
        <br />
        <Searcher />
        <br />
        <Box className={styles.listContainer}>
          <ul className={styles.list}>
            {searchText ? (
              filteredUsers.map((user) => <User user={user} />)
            ) : users ? (
              users.map((user) => <User user={user} />)
            ) : (
              <Typography>users not found</Typography>
            )}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
