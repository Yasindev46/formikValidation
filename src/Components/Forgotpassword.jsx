import React from "react"
import {Button, Card, CardContent, TextField,Grid } from "@mui/material"
export const Forgotpassword=()=>{
    return(
        <React.Fragment>
            <Card style={{width:"400px",marginLeft:"35%",marginTop:"100px"}}>
                <CardContent align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>Forgot password</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="email" placeholder="Enter Email"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" placeholder="Enter Username"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Reset Password</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}