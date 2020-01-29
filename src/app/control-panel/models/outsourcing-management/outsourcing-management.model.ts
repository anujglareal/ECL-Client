export class OutsourcingManagementModel {
  outsourceId: number;
  labCode: string;
  labName: string;
  relation: string;
  address: string;
  area: string;
  city: string;
  poNumber: string;
  telephone: string;
  fax: string;
  web: string;
  region: string;
  country: string;
  interfacingType: string;
  courier: [];
  contactPerson: string;
  contactPersons: ContactPerson[];
  email: string;
  paymentMethod: string;
  creditPeriod: string;
  creditLimit: string;
  url: string;
  userName: string;
  password: string;
  constructor() {}
}

interface RegionModel {
  regionId: number;
  regionName: string;
}

interface CountryModel {
  countryId: number;
  countryName: string;
}

export class ContactPerson {
  designation: string;
  courierId: string;
  mobile: string;
  contactPersonName: string;
  email: string;
  constructor() {}
}
