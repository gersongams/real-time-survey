import "./App.css";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Poll from "./components/Poll";
import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Results from "./components/Results";

const { Header, Footer, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;

  .content {
    padding: 1rem;
    @media (min-width: 900px) {
      padding: 2rem;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .question {
    margin-bottom: 1rem;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: red;
      margin: 0 0.2rem;
    }
    a {
      margin-left: 0.2rem;
    }
  }
`;

const App = () => (
  <Router>
    <StyledLayout>
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/">
            <h1 style={{ color: "white" }}>Survey</h1>
          </Link>
        </div>
        <div>
          <AmplifySignOut button-text="Sign Out"></AmplifySignOut>
        </div>
      </Header>
      <Content className="content">
        <Switch>
          <Route path="/poll/:pollId">
            <Poll />
          </Route>
          <Route path="/results/:pollId">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
      <Footer className="footer">
        Built with <span>&hearts;</span> by{" "}
        <a href="https://github.com/gersongams">@gersongams</a>
      </Footer>
    </StyledLayout>
  </Router>
);

export default withAuthenticator(App);
