'use strict';

// Домашняя работа
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
const min = (values) => values.reduce((x, y) => Math.min(x, y));
console.log(min(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement.Метод increment должен увеличивать значение
// счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(count) {
    return {
        value: count,
        increment() {            
            return ++this.value;
        },
        decrement() {            
            return --this.value;
        }
    }
}
console.log(createCounter(8).increment());
console.log(createCounter(5).decrement());


// 3) Напишите рекурсивную функцию findElementByClass,
// которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный
// элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementsByClass(rootElement, className) {
    const foundElements = [];
    const elementsToSearch = [rootElement];
  
    while (elementsToSearch.length > 0) {
        const currentElement = elementsToSearch.shift();
      if (currentElement.classList.contains(className)) {
        foundElements.push(currentElement);
      }
      Array.prototype.push.apply(elementsToSearch, currentElement.children);
    }
  
    return foundElements;
  }
  
const targetElement = findElementsByClass(document.getElementById('root'), 'my-class');
console.log(targetElement);