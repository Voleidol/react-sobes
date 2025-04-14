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
// const newWords = words.filter((item) => item.includes('e') && item.length > 4);
// console.log(newWords)

// 4. reduce
// Посчитай произведение всех чисел, которые больше 2

// const numbers = [1, 3, 5, 2, 6];
// const newMass = numbers.filter((item) => item > 2).reduce((acc, cur) => acc * cur, 1);
// console.log(newMass)

// 5. find
// Найди первую строку, которая начинается с заглавной "S".

// const fruits = ['banana', 'apple', 'Strawberry', 'grape'];
// const result = fruits.find((item) => item.startsWith('S'));
// console.log(result)

// 6. findIndex
// Найди индекс первого отрицательного числа.

// const values = [3, 7, -2, 8, -5];
// const result = values.findIndex((item) => item < 0);
// console.log(result)

// 7. some
// Проверь, есть ли хотя бы одна строка длиной ровно 5 символов.

// const words = ['tree', 'house', 'cat', 'sunny'];
// const result = words.some((i) => i.length === 5);
// console.log(result)

// 8. every
// Проверь, все ли числа больше 0 и меньше 100.

// const numbers = [10, 20, 30, 40];
// const result = numbers.every((i) => i > 0 && i < 100);
// console.log(result)

// 9. includes
// Проверь, есть ли значение 0.

// const numbers = [5, 10, 0, 20];
// const result = numbers.includes(0);
// console.log(result)

// 10.indexOf
// Найди индекс первого вхождения элемента 'cat'.

// const animals = ['dog', 'cat', 'parrot', 'cat'];
// const result = animals.indexOf('cat');
// console.log(result)


// 11. lastIndexOf
// Найди индекс последнего вхождения числа 42.

// const numbers = [1, 42, 5, 42, 7];
// const result = numbers.lastIndexOf(42);
// console.log(result)

// 12. slice
// Получить 3 центральных элемента.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(3,6);
// console.log(result)

// 13. splice
// Удалить 2 элемента начиная с индекса 1, и вставить вместо них 'x' и 'y'.

// const letters = ['a', 'b', 'c', 'd', 'e'];
// letters.splice(1, 2, 'x', 'y');
// console.log(letters)

// 14. concat
// Соедини три массива в один.

// const arr1 = ['a', 'b'];
// const arr2 = ['c', 'd'];
// const arr3 = ['e', 'f'];
// const result = arr1.concat(arr2, arr3);
// console.log(result)

// 15. join
// Сделай строку, где технологии разделены " -> ".

// const technologies = ['HTML', 'CSS', 'JavaScript'];
// const result = technologies.join(" -> ");
// console.log(result);

// 16. reverse
// Переверни массив и сложи первый и последний элемент нового массива.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reverse();
// console.log(result[0] + result[result.length - 1]);


// 17. sort не сделал!
// Отсортируй массив по длине строки.

// const words = ['sun', 'banana', 'apple', 'cat'];
// const result = words.sort((a, b) => a.length - b.length);
// console.log(result);

// 18. flat
// Сделай массив одномерным.

// const numbers = [1, [2, [3, [4]]]];
// const result = numbers.flat(Infinity)
// console.log(result);

// 19. flatMap не сделал!
// Для каждой буквы создай пару: [буква, буква+буква].

// const letters = ['a', 'b', 'c'];
// const result = letters.flatMap()
// console.log(result);

// 20. fill
// Заполни массив чередующимися значениями [1, 0, 1, 0, 1, 0].

// const emptyArray = new Array(6);
// const result = emptyArray.fill(1).fill(0,1,2).fill(1,2,3).fill(0,3,4).fill(0,5,6);
// console.log(result);
// или
// const result = emptyArray.fill(1).map((_, index) => index % 2 === 0 ? 1 : 0);
// console.log(result);

