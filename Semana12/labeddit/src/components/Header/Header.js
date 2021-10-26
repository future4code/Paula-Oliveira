import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToListPost, goToLogin } from '../../routes/coordenator';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
  return (
  
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick={() => goToListPost(history)} color="inherit">Feed</Button>  
        <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}

export default Header