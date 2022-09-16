export interface Ad {
    id?: number,
    title: string,
    description?: string,
    likesCount: number,
    creatorId: number,
    type: string
    category: string,
    applicants: number[]
    approved?: number,
    isDeactivated: boolean,
    isDeleted: boolean
}