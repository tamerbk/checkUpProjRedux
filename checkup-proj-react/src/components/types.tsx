
// user.ts
export interface Member {
    member_id:number;
    firstName: string;
    lastName: string;
    cardNb: number;
    shiftDay: string;
    phoneNumber: number;
    token:string
   
}

export interface Ambulance {
    id: number;
    date: Date;
    time: string;
    carNb: number;
    shiftDay: string;
    missingMaterials: string[];
    oxygenMainPercent: number;
    oxygenTankPercent: number;
    // Add more properties if needed
  }