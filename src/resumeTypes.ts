export interface Resume {
    personal: Personal;
    education: Education[];
    experience: Experience[];
    skills: any
}

export interface Personal {
    name: string;
    address: any;
    email: string;
    phone: string;
}

export interface Education {
    school: string;
    location: string;
    degrees: Degree[];
}

export interface Degree {
    level: DegreeLevel;
    subject: string;
    obtained?: string;
}

export enum DegreeLevel {
    BS = 'B.S.',
    MS = 'M.S.',
    PhD = 'PhD'
}

export interface Experience {
    company: string;
    location: string;
    positions: ExperiencePosition[];
}

export interface ExperiencePosition {
    role: string;
    start: string;
    end?: string;
    accomplishments: string[]
}