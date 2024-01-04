import { Field, Form, Formik } from "formik"
import Fields from "../../ui/forms/fields"
import Button from "../../ui/buttons/buttons"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../../redux"
import { signInSchema } from "../../../schemas/auth/signin"
import { useState } from "react"

const Forms = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    const [data, setData] = useState({
        email: email ? email : "",
        password: password ? password : "",
        checkbox: email ? true : false,
    })
    return (
        <div>
            <Formik
                initialValues={data}
                validationSchema={signInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if(values.checkbox){
                        localStorage.setItem("email" , values.email)
                        localStorage.setItem("password" , values.password)
                    }
                    else{
                        localStorage.clear()
                    }
                    dispatch(authActions.signIn({navigate ,data: {
                        email: values.email,
                        password: values.password
                    }}))
                }}
            >
                {({ touched, errors, setFieldValue , values}) => {
                    const validatorProps = { touched, errors }
                    return(
                        <Form className='grid grid-cols-12 gap-[21px]'>
                            <div className="col-span-12">
                                <Fields
                                    error={(errors.email && touched.email) ? errors.email : null } 
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-span-12">
                                <Fields
                                    error={(errors.password && touched.password) ? errors.password : null }
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="checkbox" className="cursor-pointer mb-[32px] text-[14px] font-[400] mt-[9px] text-start flex gap-[10px] items-center">
                                    <input id="checkbox" checked={values.checkbox} onChange={(e)=> setFieldValue("checkbox", e.target.checked)} type="checkbox" className="w-[20px] h-[20px] border border-border-color outline-none"/>
                                    Remember me
                                </label>
                                <Button type="submit" title="Sign In"/>
                                <p className="text-gray-text-color text-[14px] mt-[20px]">Need an account? <Link className="text-primary-text-color" to={"/sign-up"}>Sign Up</Link></p>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default Forms;