"use strict";

// let id = Symbol("id");

// const obj = {
    // 'name': 'Test',
    // [Symbol("id")]: 1,
    // getId: function(){
        // return this[id];
    // }
// };

// let id = Symbol("id");
// obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);
/*
const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123
};

myAwesomeDB.id = '13513513513';

console.log(myAwesomeDB["id"]);
console.log(myAwesomeDB);
*/



//---

// console.log(1 + "2");
// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log('3' * '8');
// console.log(typeof(4 + 10 + 'px'));
// console.log('px' + 5 + 10);
// console.log('42' - 40);
// console.log('42px' - 2); // NaN
// console.log(null +2);
// console.log(undefined + 42); // NaN

// console.log(2 == '2');
// console.log(2 === '2');
// console.log(undefined == null);
// console.log(undefined === null);

// console.log('0' == false);
// console.log('0' == 0);
// console.log(0 == 0);

//---

// console.log(false == '');
// console.log(false == []);
// console.log(false == {});
// console.log('' == 0);
// console.log('' == []);
// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == null);

// = = = = = = = = = = = = = = = =

// let a = 42;
// let b = a;
// b++;
// console.log('a', a);
// console.log('b', b);

/*
let a = [1, 2, 3];
let b = a; // add .concat
b.push(4);
console.log('a', b);
console.log('b', b);

let c = [1, 2, 3, 4];

console.log(a === b); // true
console.log(a === c); // false
*/
/*
function createFreameWorkManager() {
    const fw = ['Angular', 'React'];

    return {
        print: function() {
            console.log(fw.join(' '));
        },
        add: function(framework){
            fw.push(framework);
        }
    };
}
*/
// const manager = createFreameWorkManager();
// console.log(manager);
// manager.print();
// manager.add("VueJS");
// manager.print();

//---
/*
const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
    (function(j){
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500)
    })(i);
}
*/
/*
let result = [];
for (var i = 0; i < 5; i ++) {
    result.push( function() {
        console.log(l);
    })
}

result[2]();
result[4]();
*/
/*
let result = [];
for (var i = 0; i < 5; i++){
    (function () {
        var j = i;
        result.push ( function () {console.log(j); });
    })();
}

result[2]();
result[4]();
*/

const arr = [1, 3, 5, "kasper", 99];
const text = 'atuygwjheb';
// console.log(arr.slice(2, 4));
// console.log(arr.splice(2, 3));
console.log(text.split(""));

//---
/*
function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  
  let count = getCounter();
  
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2
  */

let user;
console.log(user ?? "Аноним");

let i = 0;
for (i = 0; i < 3; i++) { // используем существующую переменную
  console.log(i); // 0, 1, 2
}
console.log('i =', i);