import { Field } from "formik";

const Fields = (props: {name: string, placeholder: string, error: string | null}) => {
    const formStyles = "outline-none border border-border-color h-[44px] rounded-[15px] w-full px-[18px] text-[14px]"

    return(
        <div>
            <Field
                name={props.name}
                placeholder={props.placeholder}
                className={`${formStyles} ${props.error ? 'border placeholder-red-text border-red-bg bg-light-red-bg' : 'bg-white-color'}`}
            />
            <p className="text-[12px] text-start ml-[20px] mt-[5px] text-red-text font-[500]">{props.error ? props.error : ''}</p>
        </div>
    )
}
export default Fields;