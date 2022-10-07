import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  messageContainer: {
    maxWidth: "100%",
    minHeight: 420,
    position: "relative",
    borderRadius: "5px",
    boxShadow: "1px 0px 10px -5px rgba(0,0,0,0.75)",
  },
  messageInnerContainer: {
    padding: "20px",
  },
  messageBottom: {
    position: "absolute",
    display: 'flex',
    gap: '20px',
    bottom: '30px',
  },
});
