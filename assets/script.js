var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
        console.log(doc);
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
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
// Generics
var addID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doctOne = addID({ name: "yoshi", age: 40 });
// let doctTwo = addID("hello");
console.log(doctOne.name);
var doctThree = {
    uid: 9,
    resourseName: "ddf",
    data: "dfff",
};
var doctFour = {
    uid: 10,
    resourseName: "sddf",
    data: { name: "fff", age: 10 },
};
var doctFive = {
    uid: 9,
    resourseName: "ddf",
    data: ["dfff"],
};
// ENUMS
var ResourseType;
(function (ResourseType) {
    ResourseType[ResourseType["BOOK"] = 0] = "BOOK";
    ResourseType[ResourseType["AUTHOR"] = 1] = "AUTHOR";
    ResourseType[ResourseType["FILM"] = 2] = "FILM";
    ResourseType[ResourseType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourseType[ResourseType["PERSON"] = 4] = "PERSON";
})(ResourseType || (ResourseType = {}));
var docsThree = {
    uid: 9,
    resourseName: ResourseType.BOOK,
    data: "dfff",
};
var docsFour = {
    uid: 10,
    resourseName: ResourseType.AUTHOR,
    data: { name: "fff", age: 10 },
};
var docsFive = {
    uid: 9,
    resourseName: ResourseType.PERSON,
    data: ["dfff"],
};
console.log(docsThree, docsFour, docsFive);
// tuples
var arr = ["ryu", 3, true];
