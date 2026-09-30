import * as Yup from "yup"

export const forgotPassValidation=Yup.object({
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().required("Please enter your password"),
    confirmPassword:Yup.string().required("Please enter your confirm password").oneOf([Yup.ref("password"),null],"Password must match")
})