import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils";

const StyledList = styled.div``;

const List = props => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users`)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <StyledList>
      <h2>Employees in your department:</h2>
      <ul className="List">
        {users.map(user => {
          return <Card key={user.id} user={user} />;
        })}
      </ul>
    </StyledList>
  );
};

const Card = props => {
  const { id, username } = props.user;
  return (
    <li className="Card">
      {id}. {username}
    </li>
  );
};

export default List;
