// interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "Shone",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: isPerson): void => {
  console.log("hello", person.name);
};

greetPerson(me);
// greetPerson({ name: "Ira" }); Error

//
const anchor = document.querySelector("a")!;

// if (anchor) {                         // use '!' to avoid if statement, without if statement anchor is null for TS
//   console.log(anchor.href);
// }
console.log(anchor.href);
