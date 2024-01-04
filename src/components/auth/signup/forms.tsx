import { Field, Form, Formik } from "formik"
import Fields from "../../ui/forms/fields"
import Button from "../../ui/buttons/buttons"
import { Link, useNavigate } from "react-router-dom"
import { signUpSchema } from "../../../schemas/auth/signup"
import { useDispatch } from "react-redux"
import { authActions } from "../../../redux"
import avatar from "../../../assets/images/Avatar.svg"
import UploadFile from "../../upload"

const Forms = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    image: null
                }}
                validationSchema={signUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    values.image && 
                    dispatch(authActions.signUp({
                        navigate,
                        data:{
                            email: values.email,
                            first_name: values.first_name,
                            last_name: values.last_name,
                            password: values.password,
                            image: values.image,
                        }
                    }))
                }}
            >
                {({ touched, errors, setFieldValue , values}) => {
                    const validatorProps = { touched, errors , }
                    return(
                        <Form className='grid grid-cols-12 gap-[21px]'>
                            <div className="col-span-12 flex flex-col w-full justify-center mt-[30px] mb-[40px]">
                                <label htmlFor="image" className={`${errors.image ? 'border border-red-bg' : ''} mx-auto relative rounded-full overflow-hidden w-[120px] h-[120px]`}>
                                    <img 
                                        className={`w-full h-full cursor-pointer`} 
                                        src={values.image ? URL.createObjectURL(values.image) : avatar} 
                                    />
                                    <UploadFile 
                                        key={1}
                                        setFieldValue={setFieldValue}
                                    />
                                </label>
                                {errors.image &&
                                    <p className="text-[12px] text-center mt-[5px] text-red-text font-[500]">{errors.image}</p>
                                }
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <Fields
                                    error={(errors.first_name && touched.first_name) ? errors.first_name : null } 
                                    name="first_name"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <Fields
                                    error={(errors.last_name && touched.last_name) ? errors.last_name : null }
                                    name="last_name"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <Fields
                                    error={(errors.email && touched.email) ? errors.email : null }
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="sm:block col-span-6 hidden">
                                
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <Fields
                                    error={(errors.password && touched.password) ? errors.password : null }
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <Fields
                                    error={(errors.confirm_password && touched.confirm_password) ? errors.confirm_password : null }
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="col-span-12 sm:mt-[60px] mt-[20px]">
                                <Button type="submit" title="Sign Up"/>
                                <p className="text-gray-text-color text-[14px] mt-[20px]">Already have an account? <Link className="text-primary-text-color" to={"/sign-in"}>Log In</Link></p>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default Forms;