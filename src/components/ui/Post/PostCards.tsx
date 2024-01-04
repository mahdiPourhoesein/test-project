import { useMemo, useState } from "react";
import deleteI from "../../../assets/images/delete.svg"
import edit from "../../../assets/images/edit.svg"
import { useDispatch } from "react-redux";
import { postActions, usePost } from "../../../redux";
import { useNavigate } from "react-router";
import { TPost } from "../../../types/post";
import Button from "../buttons/buttons";

const PostCards = () => {
    const [isModalOpen , setIsModalOpen] = useState<number | null>(null)
    const {posts} = usePost()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useMemo(()=> 
        dispatch(postActions.getPosts())
    ,[])
    const handleEdit = (item: TPost) => {
        dispatch(postActions.setPostEdit(item))
        navigate("/create-post")
    }
    const handleDelete = (id: number) => {
        setIsModalOpen(id)
    }
    return(
        <div className="mt-[60px] grid grid-cols-12 gap-[39px]">
            {posts?.results?.length && posts.results.length > 0 ?
                posts?.results.map((item, index)=> 
                    <div key={index} className="relative h-[207px] bg-white-color rounded-[10px] shadow-[0px_2px_2px_0px_rgba(154,154,154,0.25)] col-span-6 flex">
                        <div className="absolute top-[15px] right-[15px] flex items-center gap-[20px]">
                            <span onClick={() => handleEdit(item)} className="cursor-pointer"><img src={edit} /></span>
                            <span onClick={() => handleDelete(item.id)} className="cursor-pointer"><img src={deleteI} /></span>
                        </div>
                        <div className="w-[200px] rounded-[10px] overflow-hidden">
                            <img src={item.image} className="w-full h-full"/>
                        </div>
                        <div className="2xl:text-[16px] text-[14px] ml-[15px] grid items-end py-[15px]">
                            <div className="mb-[20px]">
                                <p className="font-[700]">Name</p>
                                <p>{item.title}</p>
                            </div>
                            <div className="mb-[20px]">
                                <p className="font-[700]">Description</p>
                                <p>{item.description}</p>
                            </div>
                            <div className="mb-[20px]">
                                <p className="font-[700]">Category</p>
                                <p>{item.category.name}</p>
                            </div>
                        </div>
                    </div>
                )
                :
                <>Empty</>
            }
            {isModalOpen &&
                <div className="h-full w-full overflow-hidden bg-[#44444480] fixed top-0 left-0 flex items-center justify-center">
                    <div className="bg-white-color lg:w-[522px] rounded-[10px] p-[40px] h-[276px]">
                        <p className="2xl:text-[24px] lg:text-[20px] text-center mb-[60px]">Are you sure you want to delete the post?</p>
                        <div className="w-fit-content" onClick={() => {
                            setIsModalOpen(null);
                            dispatch(postActions.deletePost(isModalOpen))
                        }}>
                            <Button title="Delete" type="delete"/>
                        </div>
                        <div className="mt-[10px]" onClick={() => setIsModalOpen(null)}>
                            <Button title="Cancel" type="cancel"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default PostCards;