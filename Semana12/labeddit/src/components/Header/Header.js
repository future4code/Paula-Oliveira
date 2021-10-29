import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { StyledToolbar } from "./styled";
import { goToListPost, goToLogin } from "../../routes/coordenator";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

const Header = ({rightButtonText, setRightButtonText}) => {

  const { states, setters, requests } = useContext(GlobalContext);
  
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setters.setRightButtonText("login");
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
         logout
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
