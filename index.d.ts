declare class Address {
  streetAddress: string;
  addressLine2: string;
  county: string;
  state: "AZ" | "NY" | "NJ" | "MA" | "WI";
}

declare class Borrower {
  address: Address;
}

declare class Property {
  address: Address;
}

declare class Case {
  property: Property;
  borrower: Borrower;
}

declare class ViaFile {
  static case: Case;
}
