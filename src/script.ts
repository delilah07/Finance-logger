import { Invoice } from "./classes/invoices.js";
import { ListTemplate } from "./classes/listTemplate.js";
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

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
    console.log(doc);
  } else {
    doc = new Payment(...values);
    console.log(doc);
  }

  console.log(list.render(doc, type.value, "end"));
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

// Generics

const addID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doctOne = addID({ name: "yoshi", age: 40 });
// let doctTwo = addID("hello");

console.log(doctOne.name);
// console.log(doctTwo);

// with interfaces
interface Resourse<T> {
  uid: number;
  resourseName: string;
  data: T;
}

const doctThree: Resourse<string> = {
  uid: 9,
  resourseName: "ddf",
  data: "dfff",
};
const doctFour: Resourse<object> = {
  uid: 10,
  resourseName: "sddf",
  data: { name: "fff", age: 10 },
};
const doctFive: Resourse<string[]> = {
  uid: 9,
  resourseName: "ddf",
  data: ["dfff"],
};

// ENUMS
enum ResourseType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resourses<T> {
  uid: number;
  resourseName: ResourseType;
  data: T;
}

const docsThree: Resourses<string> = {
  uid: 9,
  resourseName: ResourseType.BOOK,
  data: "dfff",
};
const docsFour: Resourses<object> = {
  uid: 10,
  resourseName: ResourseType.AUTHOR,
  data: { name: "fff", age: 10 },
};
const docsFive: Resourses<string[]> = {
  uid: 9,
  resourseName: ResourseType.PERSON,
  data: ["dfff"],
};

console.log(docsThree, docsFour, docsFive);

// tuples
let arr = ["ryu", 3, true];
