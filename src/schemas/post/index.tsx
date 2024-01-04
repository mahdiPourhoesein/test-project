import { object, string } from 'yup';
import * as Yup from 'yup'

export const addPostSchema = object({
    title: 
        string()
        .required("This filed is required"),
    description: 
        string()
        .required("This filed is required"),
    image: 
        string()
        .required("This filed is required"),
    category: 
        string()
        .required("This filed is required"),
        
});