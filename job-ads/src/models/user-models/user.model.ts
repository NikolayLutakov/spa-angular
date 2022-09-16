export interface User{
    id: number,
    name: string,
    email: string,
    password: string,
    jobs_applied: number[]
    jobs_liked: number[],
    isDeleted: boolean
}