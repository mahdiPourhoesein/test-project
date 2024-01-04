import Forms from "../../components/auth/signup/forms";

const SignUp = () => {
    return(
        <div className="bg-primary-color w-[100vw] h-full min-h-[100vh] flex items-center justify-center">
            <div className="bg-white-color xl:w-[50%] lg:w-[70%] text-center pt-[20px] pb-[20px] sm:pb-[60px] px-[43px] sm:w-[80%] w-[95%] rounded-[15px]">
                <p className="text-primary-color 2xl:text-[30px] text-[25px] font-[600] mb-[20px] sm:mb-0">Sign Up</p>
                <Forms/>
            </div>
        </div>
    )
}
export default SignUp;