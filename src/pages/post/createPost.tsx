import Forms from "../../components/post/forms";
const CreatePost = () => {
    return(
        <div className="sm:w-[400px] w-[95%] mx-auto mt-[40px]">
           <h1 className="text-[36px] text-gray-text-color text-center">New post</h1>
           <Forms />
        </div>
    )
}
export default CreatePost;