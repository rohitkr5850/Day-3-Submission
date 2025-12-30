// Q1: Polyfill for Array.prototype.map

Array.prototype.myMap = function (callback){

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback(this[i], i, this));
    }

  }

  return result;
};

// Test cases
const nums = [1, 2, 3, 4, 5];

const doubled = nums.myMap(x => x * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

const users = [{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }];

const names = users.myMap(u => u.name);

console.log(names); // ['John', 'Jane']
