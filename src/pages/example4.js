// Задачи на все методы массивов

// 1. forEach
// Выведи в консоль каждый элемент массива и его индекс, 
// но только если индекс нечётный.

// const numbers = [10, 20, 30, 40, 50];
// const numbersConsole = () => {
//     numbers.forEach((item, index) => {
//         console.log(item)
//         if (index % 2 === 0) {
//             console.log(index)
//         }
//     })
// }
// numbersConsole()

// 2. map
// Создай новый массив, где к каждому числу прибавляется его индекс.
// const numbers = [1, 2, 3, 4, 5];
// const newMass = numbers.map((item, index) => item + index)
// console.log(newMass)

// 3. filter
// Оставь только те строки, которые содержат букву "e" 
// и длиной больше 4 символов.

// const words = ['apple', 'bee', 'tree', 'cat', 'elephant'];
// const newWords = words.filter((item) => item.length >= 4 ? item.includes('e'): '')
// console.log(newWords)

// 4. reduce
// Посчитай произведение всех чисел, которые больше 2

const numbers = [1, 3, 5, 2, 6];
const newMass = numbers.reduce((acc, cur) => {

}, 0)
console.log(newMass)