import React from "react";
import {  LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";


const SignUpPage = () => {

    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm />
        </ScreenContainer>
    )
}
export default SignUpPage;