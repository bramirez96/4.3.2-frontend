import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth, setToken } from "../utils";

const StyledLogin = styled.form``;

const initialValues = {
  username: "",
  password: ""
};

const Login = props => {
  const [loginData, setLoginData] = useState(initialValues);
  const { push } = useHistory();
  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, loginData)
      .then(({ data: { token } }) => {
        setToken(token);
        push("/list");
      });
  };
  const inputHandler = e => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  return (
    <StyledLogin onSubmit={submitHandler}>
      <legend>Login:</legend>
      <input
        type="text"
        name="username"
        placeholder="Enter username..."
        value={loginData.username}
        onChange={inputHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={loginData.password}
        onChange={inputHandler}
      />
      <input type="submit" value="Submit" />
    </StyledLogin>
  );
};

export default Login;
