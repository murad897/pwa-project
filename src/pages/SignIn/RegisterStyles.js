import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  loginForm: {
    marginTop: 200,
    display: "flex",
    alignItems: "center",
    gap: 20,
    justifyContent: "flex-end",
    flexDirection: "column",
  },

  formGroup: {
    fontSize: "20px",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "409px",
    whiteSpace: "nowrap",
  },

  formControll: {
    fontSize: "20px",
    padding: "10px 20px !important",
  },

  loginButtons: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginLeft: "-15px",
    marginTop: "10px",
  },

  buttons: {
    padding: "10px 20px !important",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "0.1em"
  },
});
