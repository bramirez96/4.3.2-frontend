import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils";

const StyledSignup = styled.form``;

const initialValues = {
  username: "",
  password: "",
  dept_id: null
};

const Signup = props => {
  const [signupValues, setSignupValues] = useState(initialValues);
  const [depts, setDepts] = useState([]);
  const { push } = useHistory();
  const inputHandler = e => {
    const { name, value } = e.target;
    setSignupValues({
      ...signupValues,
      [name]: value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/register`, signupValues)
      .then(user => {
        push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/data/dept`)
      .then(res => {
        setDepts(res.data);
      });
  }, []);
  return (
    <StyledSignup onSubmit={submitHandler}>
      <legend>Signup:</legend>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Enter username..."
          value={signupValues.username}
          onChange={inputHandler}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={signupValues.password}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>Department</label>
        <br />
        <select
          name="dept_id"
          value={signupValues.dept_id}
          onChange={inputHandler}
        >
          <option value="" selected disabled hidden>
            Choose one...
          </option>
          {depts.map(x => {
            return <option value={x.id}>{x.name}</option>;
          })}
        </select>
      </div>
      <input type="submit" value="Submit" />
    </StyledSignup>
  );
};

export default Signup;
