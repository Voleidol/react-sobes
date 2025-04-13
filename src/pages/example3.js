// 1.
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.reduce((s, cur) => s + cur, 0)
// console.log(newArr)

// 2. как реализовать при помощи reduce??
// const arr = [5, 3, 9, 1];
// const newArrMin = Math.min(...arr)
// const newArrMax = Math.max(...arr)
// console.log(newArrMin)
// console.log(newArrMax)

// 3.
// const newVal = [-2, 5, 0, -1, 6];
// const newValCurrent = newVal.filter((item) => item > 0)
// console.log(newValCurrent);

// 4. не сделал!!!
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana'];

// 5. 
// const arr = [1, 2, 2, 3, 4, 4];
// const newSet = new Set(arr);
// const newArr = [...newSet];
// console.log(newArr)

// или
// const arr = [1, 2, 2, 3, 4, 4];
// const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(newArr);

// 6. не сделал!!!
//[{name: 'John', age: 20}, {name: 'Jane', age: 20}, {name: 'Bob', age: 25}] -> { 20: ['John', 'Jane'], 25: ['Bob'] }

// 7. не сделал!!!
// {a: 1, b: 2} -> {1: 'a', 2: 'b'}

// 8.
// const arr = [1,2,3];

// const newArr = (mass) => {
//     for (let i = mass.length; i != 0; i--) {
//         console.log(i)
//     }
// };
// console.log(newArr(arr));

// const arr = [1,2,3];
// const newArr = arr.reduceRight((acc, item) => {
//     console.log(acc)
//     console.log(item)
//     acc.push(item)
//     return acc;
// }, [])
// console.log(newArr);

// 9. не сделал!!!
// [{id: 1, name: 'Tom'}, {id: 2, name: 'Ann'}] -> {1: {name: 'Tom'}, 2: {name: 'Ann'}}

// 10. не сделал!!!
// [1, [2, 3], 4, [5]] -> [1, 2, 3, 4, 5]
