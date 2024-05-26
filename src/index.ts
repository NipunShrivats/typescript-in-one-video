console.log("hello world!")

// var a: number = 10;
// a = 12;
// console.log("a:", a);
// ----------------------------------------------------
// ----------------------------------------------------

// 1. any
// let a: any = "Hello"
// a = 67;
// console.log(a)

// 2. unknown
// let a: unknown = "Hello"
// a = 67;
// console.log(a)
// ---------------------------
// Array
// let arr1 = [1, 2, 3, 4, "Nipun", "Shubham"];

let arr1: number[] = [1, 2, 3, 4];
let arr2: string[] = ["Nipun", "Shubham"];

arr2.forEach(ele => {
    console.log(ele.toLowerCase())
})

// ---------------------------------------
// Tuples
// let tup: (number | string)[] = [1, 2, 3, 4, "Nipun", "Shubham"]

let tup: [number, string, number, string] = [1, "Nipun", 2, "Shubham"];

tup[0] = 89;

console.log(tup)
// ---------------------------------------
// enum
enum distance {
    km = 1,
    m = 100,
    cm = 1000
}

let dist: distance = distance.km
console.log(dist)
// ---------------------------------------
// functions
function myFunc(text: string): (string | number) {
    if (text == "hello world") {
        return 1;
    }
    else {
        return 0;
    }
    return "hello world"
}

myFunc("anytext");

// -------------------------

type emp_type = {
    name: string,
    readonly age: number,
    desg: string,
    giveSal: (toEmployee: string) => void;
}

let employee: emp_type = {
    name: "Ayush",
    age: 36,
    desg: "Manager",
    giveSal: (toEmployee) => {
        console.log("emp name: ", toEmployee)
    }
}

console.log(employee)
// employee.age=34;
employee.giveSal("Nipun");

// -----------------------------------------
// Union and types types

let opt: number | string = 23;

// intersection types
type calling = {
    call: () => void;
}
type dialing = {
    dial: () => void;
}

let app: calling & dialing = {
    call: () => {
        console.log("call");
    },
    dial: () => {
        console.log("dial");
    }
}