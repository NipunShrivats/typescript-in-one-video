"use strict";
console.log("hello world!");
let arr1 = [1, 2, 3, 4];
let arr2 = ["Nipun", "Shubham"];
arr2.forEach(ele => {
    console.log(ele.toLowerCase());
});
let tup = [1, "Nipun", 2, "Shubham"];
tup[0] = 89;
console.log(tup);
var distance;
(function (distance) {
    distance[distance["km"] = 1] = "km";
    distance[distance["m"] = 100] = "m";
    distance[distance["cm"] = 1000] = "cm";
})(distance || (distance = {}));
let dist = distance.km;
console.log(dist);
function myFunc(text) {
    if (text == "hello world") {
        return 1;
    }
    else {
        return 0;
    }
    return "hello world";
}
myFunc("anytext");
let employee = {
    name: "Ayush",
    age: 36,
    desg: "Manager",
    giveSal: (toEmployee) => {
        console.log("emp name: ", toEmployee);
    }
};
console.log(employee);
employee.giveSal("Nipun");
//# sourceMappingURL=index.js.map