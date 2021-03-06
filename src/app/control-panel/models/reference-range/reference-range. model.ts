export interface ReferenceRangeModel {
  id: string;
  testCode: string;
  machine: string;
  testName: string;
  units: string;
  type: string;
  result: string;
  ageLower: string;
  ageUpper: string;
  minReferenceRangeFemale: string;
  maxReferenceRangeFemale: string;
  minReferenceRangeMale: string;
  maxReferenceRangeMale: string;
  minCriticalValue: string;
  maxCriticalValue: string;
}

export class ReferenceRange {
  ageRange: string;
  lowerAge: string;
  upperAge: string;
  min: string;
  max: string;
  description: string;
  value: string;
  alternateResult: string;
  criticalRangeMax: string;
  criticalRangeMin: string;

  constructor() {}
}
