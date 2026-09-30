import { Button, Card, CardContent, TextField, Grid } from "@mui/material";
import React, { useEffect,useState} from "react";
import { validation } from "../Validation/LoginValidation";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  let a = "";
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const getData=async()=>{
    const data=await axios.get("http://localhost:4040/api/users")
  }
  const navigate=useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(values));
  };

  useEffect(()=>{
getData()
  },[])
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "300px", marginLeft: "35%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Employee Login </h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />

                {error && <p style={{ color: "red" }}>{error.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                />
                {error && <p style={{ color: "red" }}>{error.password}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Forgot your password? <Link to="/forgot-password">Reset here</Link>
                </p>
                <p>
                  Don't have an account? <Link to="/register">Register here</Link>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
