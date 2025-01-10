"use strict";
const identity = (text) => {
    return text;
};
const first = (text) => {
    if (text.length > 0) {
        return text[0];
    }
    return undefined;
};
const last = (text) => {
    if (text.length > 0) {
        return text[text.length - 1];
    }
    return undefined;
};
// средние
const filter = (arr, fun) => {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
};
const map = (arr, fun) => {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(fun(arr[i]));
    }
    return resultArr;
};
const pair = (a, b) => {
    return [a, b];
};
// сложные
const reduce = (arr, fun, startValue) => {
    let result = startValue;
    for (let i = 0; i < arr.length; i++) {
        result = fun(result, arr[i]);
    }
    return result;
};
const PromiseWrapper = (fun) => {
};
const fetchUserData = (id) => Promise.resolve({ name: 'User name', email: 'email@email.com' });
PromiseWrapper(fetchUserData); // Возвращает `Promise` с тем же типом что и `fetchUserData`
const extractProperty = (obj, value) => {
    return obj[value];
};
