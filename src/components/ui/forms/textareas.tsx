import { FormikErrors } from "formik";

type Select = {
    setFieldValue: 
    (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<{
        title: string;
        description: string;
        image: null;
        category: string;
    }>>
    name: string, 
    placeholder: string, 
    error: string | null,
    values: string
}

const Textares = (props: Select) => {
    const formStyles = "resize-none outline-none border border-border-color min-h-[150px] max-h-[150px] rounded-[15px] w-full p-[18px] text-[14px]"

    return(
        <div>
            <textarea
                onChange={(e) => {props.setFieldValue(props.name , e.target.value)}}
                name={props.name}
                value={props.values}
                placeholder={props.placeholder}
                className={`${formStyles} ${props.error ? 'border placeholder-red-text border-red-bg bg-light-red-bg' : 'bg-white-color'}`}
            />
            <p className="text-[12px] text-start ml-[20px] text-red-text font-[500]">{props.error ? props.error : ''}</p>
        </div>
    )
}
export default Textares;