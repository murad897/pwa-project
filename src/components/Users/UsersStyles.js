import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    padding: "0 20px 0 0",
  },
  listContainer: {
    padding: '0px',
    marginLeft: '-10px',
  },
  list: {
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px'
  }
});
