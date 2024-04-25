"use strict";
// @ts-ignore
// const namee: (person: UserData) => void = (person: UserData): void => {
const nam = (person) => {
    const [name, age, drives] = person;
    console.log(`This is the Name of the user: ${name}, Age: ${age}, Drives: ${drives ? "Yes" : "No"}`);
};
const person1 = ["ABDULLAH", 18, true];
const person2 = ["UMER", 18, false];
const person3 = ["ANUS", 18, true];
nam(person1);
nam(person2);
nam(person3);
