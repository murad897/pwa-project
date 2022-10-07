import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./SearchStyles";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const Searcher = () => {
  const styles = useStyles();
  const [value, setValue] = useState("");
  const { filterUsers } = useContext(UsersContext);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    filterUsers(e.target.value);
  };

  return (
    <Box>
      <TextField
        size="small"
        className={styles.search}
        placeholder="search User"
        value={value}
        onChange={(e) => onChangeHandler(e)}
        variant="outlined"
      />
    </Box>
  );
};

export default Searcher;
