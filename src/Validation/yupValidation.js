import * as Yup from "yup"

export const Registerschema=Yup.object(
    {
        name:Yup.string().min(2).max(10).required("Please enter your name"),
        email:Yup.string().email().required("Please enter your email"),
        phone:Yup.string().min(5).max(10).required("Please enter your phone"),
        username:Yup.string().min(2).max(10).required("Please enter your Username"),
        password:Yup.string().min(2).max(10).required("Please enter your Password"),
        confirmpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),
    }
)