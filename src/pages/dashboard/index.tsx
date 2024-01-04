import { useNavigate } from "react-router";
import PostCards from "../../components/ui/Post/PostCards";
import Button from "../../components/ui/buttons/buttons";
import { useDispatch } from "react-redux";
import { postActions } from "../../redux";
import PaginatedItems from "../../components/ui/paginate";

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <div className="mt-[60px]">
            <div className="max-w-[1062px] mx-auto">
                <div className="w-full flex justify-between font-[600]">
                    <h1 className="text-[36px] text-gray-text-color">All Posts</h1>
                    <div onClick={() => {
                        dispatch(postActions.setPostEdit(null))
                        navigate("/create-post")
                    }}>
                        <Button title="+ New post" type="submit"/>
                    </div>
                </div>
                <PostCards />
                <div className="mt-[40px] max-w-[315px] mx-auto">
                    <PaginatedItems/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;