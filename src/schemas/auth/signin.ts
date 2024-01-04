import { object, string } from 'yup';

export const signInSchema = object({
    email:  
         string()
         .email("Email is not valid")
        .required("This filed is required"),
    password:
        string()
        .required("This filed is required")
        .min(6, "Password must be at least 6 characters long"),
});