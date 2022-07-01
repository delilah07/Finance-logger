import { Invoice } from "./classes/invoices.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasForutter";

// -------------- form ----------------
// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement; // TS doesn't now what .new-item-form is, we need to write that
// console.log(form.children);

// -------------- inputs --------------
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

//
//
//
//
//
// -------------- classes --------------
const inOne = new Invoice("mario", "work", 700);
const inTwo = new Invoice("luigi", "work", 300);

let invoices: Invoice[] = [];
// invoices.push("hi"); error
invoices.push(inOne);
invoices.push(inTwo);

console.log(invoices);

//
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshio", "lesson", 500);
docTwo = new Payment("mario", "web", 5000);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
