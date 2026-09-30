import React from "react"
import {Button, Card, CardContent, TextField,Grid } from "@mui/material"
import {useFormik} from "formik"
import {forgotPassValidation} from "../Validation/forgotPassowrdValidation"
import { useNavigate } from "react-router-dom"

export const Forgotpassword=()=>{
    const navigate=useNavigate()
    const initialData={
        email:"",
        password:"",
        confirmPassword:""
    }
    const {values,errors,handleChange,handleSubmit,handleBlur,touched}=useFormik({
        initialValues:initialData,
        validationSchema:forgotPassValidation,
        onSubmit:(values)=>{navigate("/")}
        })
    return(
        <React.Fragment>
            <Card style={{width:"400px",marginLeft:"35%",marginTop:"100px"}}>
                <form>
                <CardContent align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <h1>Forgot password</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined" 
                                type="email" 
                                placeholder="Enter Email" 
                                fullWidth
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined" 
                                type="password" 
                                placeholder="Enter New Password" 
                                fullWidth
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined" 
                                type="password" 
                                placeholder="Confirm New Password" 
                                fullWidth
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleSubmit}>
                                Reset Password
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
                </form>
            </Card>
        </React.Fragment>
    )
}