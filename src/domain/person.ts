export interface Person {
    name?:                           string;
    headline?:                       string;
    email?:                          string;
    profilePicturePath?:             string;
    executiveSummary?:               string;
    phone?:                          string;
    location?:                       string;
    highestEducation?:               string;
    dayOfBirth?:                     string;
    projectManagementMethodologies?: Paradigm[];
    certifications?:                 string[];
    paradigms?:                      Paradigm[];
    tools?:                          Framework[];
    frameworks?:                     Framework[];
    languages?:                      Language[];
    programmingLanguages?:           Language[];
    projects?:                       Project[];
}

export interface Framework {
    name?:                    string;
    numberOfYearsExperience?: number;
    sinceTheBeginning?:       boolean;
    Name?:                    string;
    NumberOfYearsExperience?: number;
    SinceTheBeginning?:       boolean;
}

export interface Language {
    Name?:                    string;
    NumberOfYearsExperience?: number;
    SinceTheBeginning?:       boolean;
}

export interface Paradigm {
    name?:                    string;
    numberOfYearsExperience?: number;
}

export interface Project {
    Agency?:          null | string;
    CentralElements?: string;
    ContractedHours?: number;
    Customer?:        string;
    DeliveredHours?:  number;
    Description?:     string;
    StartDate?:       string;
    EndDate?:         string;
    HourlyRate?:      number;
    ProjectName?:     null | string;
    ProjectType?:     number;
    Role?:            string;
    Sectors?:         string;
    Technologies?:    string;
}
