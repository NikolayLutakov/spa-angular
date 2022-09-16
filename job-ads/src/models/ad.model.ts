export interface Ad {
    id: number,
    title: string,
    description: string,
    likesCount: number,
    creatorId: number,
    type: string
    category: string,
    applicants: number[]
    approvedId: number,
    isDeactivated: boolean,
    isDeleted: boolean
}