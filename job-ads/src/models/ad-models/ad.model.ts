import { AdType } from "../enums/ad-enums/ad-type.enum";
import { JobCategory } from "../enums/ad-enums/job-category.enum";

export interface Ad {
    id: number,
    title: string,
    description?: string,
    likesCount: number,
    creatorId: number,
    type: AdType
    category: JobCategory,
    applicants: number[]
    approved?: number,
    isActive: boolean,
    isDeleted: boolean
}