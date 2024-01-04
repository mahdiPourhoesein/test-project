import { object, string } from 'yup';
import * as Yup from 'yup'

export const signUpSchema = object({
    email:  
         string()
         .email("Email is not valid")
        .required("This filed is required"),
    password:
        string()
        .required("This filed is required")
        .min(6, "Password must be at least 6 characters long")
        .matches(/\d{2,}/, "Your password must have at least 2 number")
        .matches(/[a-z]/, "Your password must have at least 1 lowercase")
        .matches(/[A-Z]/, "Your password must have at least 1 uppercase"),
    confirm_password:
        string()
        .required("This filed is required")
        .oneOf(
            [Yup.ref('password'), ''],
            'Password not match'
        ),
    first_name:
        string()
        .required("This filed is required"),
    last_name:
        string()
        .required("This filed is required"),
    image: Yup
        .mixed()
        .required("This filed is required")
        
});