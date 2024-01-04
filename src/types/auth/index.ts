export type TSignIn = {
    email: string,
    password: string
}
export type TSignUp = {
    email: string,
    password: string,
    first_name: string
    last_name: string
    image: File 
}

export type TUser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    is_active: boolean,
    image: string
}