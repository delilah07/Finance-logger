const anchor = document.querySelector("a")!;

// if (anchor) {                      // use '!' to avoid if statement, without if statement anchor is null for TS
//   console.log(anchor.href);
// }

// console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement; // TS doesn't now what .new-item-form is, we need to write that
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

//  classes
class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `$(this.client) owes £${this.amount} for ${this.details}`;
  }
}

const inOne = new Invoice("mario", "work", 700);
const inTwo = new Invoice("luigi", "work", 300);

let invoices: Invoice[] = [];
// invoices.push("hi"); error
invoices.push(inOne);
invoices.push(inTwo);

console.log(invoices);
