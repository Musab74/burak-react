import { memberStatus, memberType } from "../enums/member.enum";

export interface Member {
    memberType: memberType;
    memberStatus: memberStatus
    memberNick: string;
    memberPassword: string;
    memberPhone: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createAt: Date;
    updateAT: string;
}

export interface MemberUpdateInput {
    _id: string;
    memberStatus?: memberStatus;
    memberNick?: string;
    memberPhone?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
    createAt: Date;
    updateAT: string;
}

export interface LoginInput{
    memberNick: string;
    memberPassword: string;
}