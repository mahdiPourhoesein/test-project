import Forms from "../../components/auth/signin/forms";

const SignIn = () => {
    return(
        <div className="bg-primary-color w-[100vw] h-full min-h-[100vh] flex items-center justify-center">
            <div className="bg-white-color xl:w-[30%] lg:w-[50%] text-center pt-[20px] pb-[60px] px-[43px] sm:w-[60%] w-[95%] rounded-[15px]">
                <p className="text-primary-color 2xl:text-[30px] text-[25px] font-[600] mb-[28px]">Sign In</p>
                <Forms/>
            </div>
        </div>
    )
}
export default SignIn;