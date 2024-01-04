import { Form, Formik } from "formik"
import Fields from "../ui/forms/fields"
import Button from "../ui/buttons/buttons"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postActions, usePost } from "../../redux"
import avatar from "../../assets/images/Avatar.svg"
import Textares from "../ui/forms/textareas"
import Selects from "../ui/forms/selects"
import UploadFile from "../upload"
import { useMemo, useState } from "react"
import { TPost, TPostCreate } from "../../types/post"
import { addPostSchema } from "../../schemas/post"

const Forms = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {categories, postEdit} = usePost()
    const getPosts = useMemo(()=> 
        dispatch(postActions.getCategories())
    ,[])
    const [data, setData] = useState<TPostCreate>({
        title: postEdit?.title ? postEdit?.title : "",
        description: postEdit?.description ? postEdit?.description : "",
        image: postEdit?.image ? postEdit?.image : null,
        category: postEdit?.category.id ? postEdit?.category.id : null,
    })
    return (
        <div>
            <Formik
                initialValues={data}
                validationSchema={addPostSchema}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if(typeof(values.image) == "string"){
                        values.image = null
                        setFieldError("image", "This filed is required")
                        return setSubmitting(false)
                    }else if(postEdit){
                        dispatch(postActions.editPost({navigate, data: {value: values , id: postEdit?.id}}))
                    }else{
                        dispatch(postActions.postPost({navigate, data: values}))
                    }
                }}
            >
                {({ errors, isSubmitting, resetForm , setFieldValue, values}) => {
                    const validatorProps = { errors }
                    return(
                        <Form>
                                <label htmlFor="image" className={`${errors.image ? 'border border-red-bg' : ''} block mx-auto relative overflow-hidden w-[200px] h-[200px] mx-auto rounded-[10px] mt-[30px]`}>
                                    <img 
                                        className={`w-full h-full cursor-pointer`} 
                                        src={
                                            values.image && 
                                            typeof(values.image) !== "string"  ? 
                                                URL.createObjectURL(values.image) 
                                                : 
                                                values.image ? 
                                                    values.image
                                                    :
                                                    avatar
                                        } 
                                    />
                                    <UploadFile 
                                        key={1}
                                        setFieldValue={setFieldValue}
                                    /> 
                                </label>
                                {errors.image  && <p className="text-red-text mt-[5px] w-[200px] mx-auto pl-[20px] text-[12px]">This filed is required</p>}
                                <div className="mb-[21px] mt-[20px]">
                                    <Fields
                                        error={(errors.title) ? errors.title : null } 
                                        name="title"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-[21px]">
                                    <Textares
                                        setFieldValue={setFieldValue}
                                        error={(errors.description) ? errors.description : null } 
                                        name="description"
                                        placeholder="Discription"
                                        values={values.description}
                                    />
                                </div>
                                <div className="mb-[21px]">
                                    <Selects
                                        error={(errors.category) ? errors.category : null } 
                                        name="category"
                                        placeholder="Discription"
                                        setFieldValue={setFieldValue}
                                        options={categories}
                                        values={values.category}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Button type="submit" title={postEdit ? "Edit" : "Create"}/>
                                </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default Forms;