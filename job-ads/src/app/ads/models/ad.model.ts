export interface Ad {
    id: number,
    title: string,
    description: string,
    creatorId: string,
    type: string
    category: string,
    applicants: string[]
    approvedId: string,
    isDeactivated: boolean,
    userLikes: string[]
}