import React from "react";
import { InputsContainer, LoginFormContainer, SignUpButtonContainer } from "./styled";
import  TextField  from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import  Button  from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {goToSignUp} from "../../routes/coordinator"
import {login} from "../../services/user"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginForm = () => {

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)

    }


    const history = useHistory();
    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
              < InputsContainer>
                  <TextField 
                      name={"email"}
                      value={form.email}
                      onChange={onChange}
                      variant={"outlined"}
                      label={"Email"}
                      margin={"normal"}
                      fullWidth
                      required
                      type={"email"}
                  />
                   <TextField 
                      name={"password"}
                      value={form.password}
                      onChange={onChange}
                      label={"Senha"}
                      variant={"outlined"}
                      margin={"normal"}
                      fullWidth
                      required
                      type={"password"}
                  />
              </ InputsContainer>
                  <Button
                      onClick={() => goToSignUp(history)}
                      type={"submit"}
                      fullWidth
                      variant="contained"
                      color={"primary"}>
                          Fazer Login
                  </Button>
            </form>
        </LoginFormContainer>
    )
}
export default LoginForm;