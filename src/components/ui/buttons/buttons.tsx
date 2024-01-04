const Button = ({type , title}: {type: string, title: string}) => {
    if(type == "submit"){
        return(
            <button type="submit" className="px-[70px] py-[10px] bg-primary-color text-center text-white-color rounded-[10px] font-[600]">
                {title}
            </button>
        )
    }else if(type == "delete"){
        return(
            <button type="submit" className="block px-[70px] py-[10px] bg-red-bg text-center text-white-color rounded-[10px] font-[600] mx-auto">
                {title}
            </button>
        )
    }else if(type == "cancel"){
        return(
            <button type="submit" className="block px-[70px] py-[10px] bg-transparent text-center text-gray-text-color rounded-[10px] font-[600] mx-auto">
                {title}
            </button>
        )
    }else{
        return <></>
    }
}
export default Button;