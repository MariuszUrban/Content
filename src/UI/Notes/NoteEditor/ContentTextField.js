import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const ContentTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
      fontFamily: "Blippo",
      fontSize: "1.25rem",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#204361",
        borderRadius: "15px",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

export default ContentTextField;
