import React from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import { UserContextPorvider, UsersContext } from "../context/UsersContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/SignIn";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const App = () => {
  const { user } = useContext(UsersContext);
  return (
    <Container maxWidth="lg">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
