import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearToken } from "../utils";
import { useHistory } from "react-router-dom";

const StyledHeader = styled.div`
  min-height: 10vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
  }
  nav {
    a,
    button {
      padding: 8px 20px;
      &.active {
      }
    }
  }
`;

const Header = props => {
  const { push } = useHistory();
  const logoutHandler = e => {
    e.preventDefault();
    clearToken();
    push("/login");
  };
  return (
    <StyledHeader>
      <h1>React App</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/list">List</NavLink>
        <button onClick={logoutHandler}>Logout</button>
      </nav>
    </StyledHeader>
  );
};

export default connect(
  null,
  {}
)(Header);
