import API from "../../axiosConfig"
import { TPostCreate, TPostEdit } from "../../types/post"

export async function getPostsServices(page?: string) {
    return API.get(`${page && typeof(page) == "string" ? page : '/api/post/crud/?limit=4'}`)
}
export async function getCategoreisServices() {
    return API.get("/api/category/")
}
export async function postPostsServices(data:TPostCreate) {
    return API.post("/api/post/crud/", data)
}
export async function editPostsServices(data:TPostEdit) {
    return API.put(`/api/post/crud/${data.id}/`, data.value)
}
export async function deletePostsServices(id:number) {
    return API.delete(`/api/post/crud/${id}/`)
}