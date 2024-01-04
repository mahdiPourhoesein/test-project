import { FormikErrors } from "formik";
import { TCategoryList } from "../../../types/post";

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
    error: string | null
    options: TCategoryList[]
    values: number | null
}

const Selects = (props: Select) => {
    const formStyles = "outline-none w-full bg-transparent text-[14px] cursor-pointer"

    return(
        <div>
            <label htmlFor={props.name} className={`${props.error ? 'border placeholder-red-text border-red-bg bg-light-red-bg' : 'bg-white-color'} block h-[44px] px-[18px] flex items-center border border-border-color rounded-[15px] w-full w-full`}>
                <select
                    id={props.name}
                    value={props.values? props.values : undefined}
                    name={props.name}
                    onChange={(e) => {props.setFieldValue(props.name , e.target.value)}}
                    className={`${formStyles}`}
                >   
                    <option value={undefined}>Not selected</option>
                    {props.options.length > 0 &&
                        props.options.map((cate)=> (
                            <option key={cate.id} value={cate.id}>{cate.name}</option>
                        ))
                    }
                </select>
            </label>
            <p className="text-[12px] text-start ml-[20px] mt-[5px] text-red-text font-[500]">{props.error ? props.error : ''}</p>
        </div>
    )
}
export default Selects;