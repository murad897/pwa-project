import { Box, Button, TextField } from "@mui/material";
import { useStyles } from "./MessageStyles";

const MessageContainer = () => {
  const styles = useStyles();

  return (
    <Box className={styles.messageContainer}>
      <Box className={styles.messageInnerContainer}>
        <Box className={styles.messageBottom}>
          <TextField size="small" placeholder="write message"/>
          <Button className={styles.sendButton} variant="outlined">
            send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageContainer;
