export interface Person {
    name?: string;
    headline?: string;
    email?: string;
    profilePicturePath?: string;
    executiveSummary?: string;
    phone?: string;
    location?: string;
    highestEducation?: string;
    dayOfBirth?: string;
    projectManagementMethodologies?: ProjectMethodologie[];
    certifications?: Certification[];
    paradigms?: Paradigm[];
    tools?: Framework[];
    frameworks?: Framework[];
    languages: Language[];
    programmingLanguages?: Language[];
    projects?: Project[];
}

export interface Framework {
    name?: string;
    numberOfYearsExperience?: number;
    sinceTheBeginning?: boolean;
}

export interface Language {
    name?: string;
    numberOfYearsExperience: number;
    sinceTheBeginning?: boolean;
}

export interface Paradigm {
    name?: string;
    numberOfYearsExperience?: number;
}

export interface ProjectMethodologie {
    name?: string;
    numberOfYearsExperience?: number;
}

export interface Project {
    agency?: null | string;
    centralElements?: string;
    contractedHours?: number;
    customer?: string;
    deliveredHours?: number;
    description?: string;
    startDate?: string;
    endDate?: string;
    hourlyRate?: number;
    projectName?: null | string;
    projectType?: number;
    role?: string;
    sectors?: string;
    technologies: string;
}

export interface Certification {
    name: string;
    imagePath?: string;
    verifyLink?: string;
}