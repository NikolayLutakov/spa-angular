export interface Organisation{
    id: number,
    name: string,
    email: string,
    password: string,
    job_ads: number[],
    isDeleted: boolean
}