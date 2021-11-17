import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { StyledToolbar } from "./styled";
import { goToListPost, goToLogin } from "../../routes/coordenator";
import { useHistory } from "react-router-dom";


const Header = ({rightButtonText, setRightButtonText}) => {

  
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login")
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToListPost(history)} color="inherit">
          Feed
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
        {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
