import React from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.div`
  padding: 0 100px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 100px;
  margin-bottom: 40px;
  background-color: black;
  color: white;
`;

const Heading = styled.div`
  flex: 1;
  font-family: "Times New Roman", cursive;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: red;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: red;
    color: white;
  }
`;

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  async componetDidMount() {
    const endpoint = "http://localhost:3300/joke";

    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        authorization: token
      }
    };

    try {
      const res = axios.get(endpoint, reqOptions);
      this.setState({ jokes: res.data });
    } catch (error) {
      console.error("Server Error", error);
    }
  }

  logout() {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <NavBar>
          <Heading>
            <h1> Jokes </h1>
          </Heading>
          <Button onClick={this.logout}> LOGOUT </Button>
        </NavBar>

        <>
          {this.state.jokes.map(joke => {
            return (
              <List key={joke.id}>
                <h4> {joke.joke} </h4>
                <hr />
              </List>
            );
          })}
        </>
      </div>
    );
  }
}

export default Jokes;
