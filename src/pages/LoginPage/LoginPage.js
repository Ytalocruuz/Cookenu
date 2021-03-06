import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import  Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";

const LoginPage = ({rightButtonText, setRightButtonText}) => {
     
    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm rightButtonText ={rightButtonText} setRightButtonText={setRightButtonText} />
                <SignUpButtonContainer>
                    <Button 
                      onClick={() => goToSignUp(history)}
                      type={"submit"}
                      fullWidth
                      variant={"text"}
                      color={"primary"}
                    >
                        Não possui conta? Cadastre-se
                    </Button>

                </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;