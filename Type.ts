// @ts-ignore

// type Student = {
//   name: string;
//   age: number;
// };

// type Address = {
//   city: string;
//   country: string;
// };

// type Data = Student & Address;
// const BioData: Data = {
//   name: "Abdullah",
//   age: 18,
//   city: "Karachi",
//   country: "pakistan",
// };

// interface Student {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   country: string;
// }

// interface Data extends Student, Address {}
// const BioData: Data = {
//   name: "Abdullah",
//   age: 18,
//   city: "Karachi",
//   country: "pakistan",
// };

// console.log("====================================");
// console.log(BioData);
// console.log("====================================");

// interface Student {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   country: string;
// }

// interface Data extends Student, Address {}
// class BioData implements Data {
//   constructor(
//     public name: string,
//     public age: number,
//     public city: string,
//     public country: string
//   ) {}
// }

// const Data = new BioData("Abdullah", 18, "krachi", "pakistan");

const Nme: (hobby: string[] | string) => string[] = ( hobby: string | string[]): string[] => {
  if (typeof hobby === "object" || Array.isArray(hobby)) {
    return hobby.map((item) => item);
  } else {
    return ["ok"];
  }
};

const namee = Nme(["abdullah", "safdat"]);
console.log("====================================");
console.log(namee);
console.log("====================================");
