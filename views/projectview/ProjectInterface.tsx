// ProjectsInterface.ts

// Define User Information
export interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userActive: boolean;
    userCreationDate: string;
  }
  
  // Define Address Information
  export interface Address {
    street: string;
    city: string;
    state: string;
    county?: number;
    country?: number;
    zip: number;
  }
  
  // Define Well Information
  export interface Well {
    depth?: number;
    pipeDiameter?: number;
    pumpModel?: string;
    geoX?: number;
    geoY?: number;
  }
  
  // Define Service Report Information
  export interface ServiceReport {
    activityType?: string;
    reportDate?: Date;
    description?: string;
  }
  
  // Define Project Information
export interface ProjectInfo {
  projectName?: string;
  business?: string;
  completionStatus?: string;
  startDate?: Date;
  endDate?: Date;
  expense?: number;
  cost?: number;
  user: UserInfo;
  address: Address;
  well: Well;
  serviceReport: ServiceReport;
}

