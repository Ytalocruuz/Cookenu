import React from "react";
import {  LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";


const SignUpPage = (setRightButtonText) => {

    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}
export default SignUpPage;