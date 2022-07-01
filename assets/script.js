import { Invoice } from "./classes/invoices.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// -------------- form ----------------
// const form = document.querySelector('form')!;
var form = document.querySelector(".new-item-form"); // TS doesn't now what .new-item-form is, we need to write that
// console.log(form.children);
// -------------- inputs --------------
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// list template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
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
var inOne = new Invoice("mario", "work", 700);
var inTwo = new Invoice("luigi", "work", 300);
var invoices = [];
// invoices.push("hi"); error
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
//
var docOne;
var docTwo;
docOne = new Invoice("yoshio", "lesson", 500);
docTwo = new Payment("mario", "web", 5000);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
