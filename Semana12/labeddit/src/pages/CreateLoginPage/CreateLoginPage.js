import { Button, TextField } from "@material-ui/core";
import React from "react";
import {
  InputsContainer,
  ScreenContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";
import { signUp } from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const CreateLoginPage = ({setRightButtonText}) => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    signUp(form, clear, history, setRightButtonText)
    event.preventDefault();
  };


  return (
    <ScreenContainer>
      <h1>Novo Usuário</h1>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
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
