export interface SignUpFormData {
    enrollmentNumber: string;
    username: string;
    password: string;
    email: string;
    fullName: string;
    contact_no: string;
    biography: string;
    portfolio?: string;
    linkedin?: string;
    github?: string;
    skills: string[];
    api?: string; 
}

export interface ParticipationHistory {
    eventName: string;
    date: string;
    awards: string[];
}

export interface SocialLinks {
    linkedin?: string;
    github?: string;
}

export interface UserDataInStore {
    enrollmentNumber?: string;
    username: string;
    email: string;
    role: 'student' | 'organizer';
    fullName: string;
    profile_pic?: string;
    contact_no?: string;
    skills?: string[];
    biography?: string;
    portfolio?: string;
    socialLinks?: SocialLinks;
    participationHistory?: ParticipationHistory[];
    availability?: boolean;
    registrationDate?: Date;
    verified: boolean;
}

export interface SignupResponse {
    user:    User;
    message: string;
}

export interface User {
    enrollmentNumber:     string;
    username:             string;
    email:                string;
    role:                 string;
    fullName:             string;
    contact_no:           string;
    skills:               string[];
    biography:            string;
    portfolio:            string;
    socialLinks:          SocialLinks;
    verified:             boolean;
    availability:         boolean;
    registrationDate:     Date;
    participationHistory: any[];
}

export interface VerificationCode {
    createdAt: number;
    code:      string;
}

