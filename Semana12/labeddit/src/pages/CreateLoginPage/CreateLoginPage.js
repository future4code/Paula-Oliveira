import { Button, TextField } from "@material-ui/core";
import React from "react";
import {
  InputsContainer,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { outlinedInputClasses } from "@mui/material";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const CreateLoginPage = () => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
  };

  const createLogin = () => {
    axios.post(`${{ BASE_URL }}/users/login`, form);
  };

  return (
    <ScreenContainer>
      <h1>Novo Usuário</h1>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"Name"}
          />
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
            Novo Usuário
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default CreateLoginPage;
