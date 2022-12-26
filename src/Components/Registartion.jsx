import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { Registerschema } from "../Validation/yupValidation";
import axios from "axios";

export const Registration = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: Registerschema,
    onSubmit: async (values) => {
      const result = await axios.post("http://localhost:2525/adduser", values);
      setMsg(result.data);
    },
  });
  useEffect(() => {
    if (msg !== "") {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [msg]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "400px", marginLeft: "35%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Employee registration</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {<p>{errors.name}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {<p>{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="number"
                  placeholder="Enter Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {<p>{errors.phone}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {<p>{errors.username}</p>}
              </Grid>
              <Grid item xs={12}>
                *
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {<p>{errors.password}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
                {<p>{errors.confirmpassword}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                {msg !== "" && <Alert severity="success">{msg}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <p>
                  Already have an account? <a href="">Login</a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
