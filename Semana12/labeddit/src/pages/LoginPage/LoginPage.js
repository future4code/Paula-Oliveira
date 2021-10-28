import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputsContainer, ScreenContainer, SignUpButtonContainer } from "./styled";
import useForm from "../../hooks/useForm"
import { outlinedInputClasses } from "@mui/material";
import { useHistory } from "react-router-dom";
import { login } from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = () =>{
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({email:"", password:""})
  const history = useHistory()

  const onSubmitForm = (event) => {
        login(form, clear, history)
        event.preventDefault()
  }

     return(
      <ScreenContainer>
        <h1>TELA DE LOGIN</h1>
        <InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
              
            />

            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"password"}
            />

            <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"firstColor"}
            margin={"normal"}
          
            >
              Login
            </Button>
          
          </form>
        </InputsContainer>
        <SignUpButtonContainer>
        <Button
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"firstColor"}
            margin={"normal"}
            >
              Cadastre-se
        </Button>
        </SignUpButtonContainer>
      </ScreenContainer>
    )
}

export default LoginPage;