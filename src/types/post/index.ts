export type TCategoryList = {
    id: number,
    name: string,
    slug: string
}
export type TPostList = {
    count: number,
    next: string,
    previous: boolean,
    results: TPost[]
}
export type TPost = {
    id: number,
    title: string,
    description: string,
    image: string,
    category: {
        id: number,
        slug: string,
        name: string
    },
    author: {
        id: number,
        full_name: string
    }
}


export type TPostCreate = {
    title: string,
    description: string
    image: File | null | string
    category: number | null
}
export type TPostEdit = {
    value: TPostCreate,
    id: number
}