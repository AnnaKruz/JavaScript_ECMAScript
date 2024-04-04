'use strict';

// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// function mergeArrays(arr1, arr2) {
// return [...arr1, ...arr2];
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
// const newArray = rest.filter((el, index) => {
// return rest.indexOf(el) === index;
// });
// return newArray;
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// function removeDuplicates(...rest) {
// const newArray = [...new Set(rest)];
// return newArray;
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function getEvenNumbers(arr) {
// return arr.filter(el => el % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));


// function calculateAverage(arr) {
// return arr.reduce((el, acc) => el + acc) / arr.length;
// }

// console.log(calculateAverage([1, 2, 3, 4]));

// function capitalizeFirstLetter(str) {
// return str.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
// }

// console.log(capitalizeFirstLetter('qwert hello'));

// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(def) {
// return {
// value: def,
// add(num) {
// this.value += num;
// return this.value;
// },
// subtract(num) {
// this.value -= num;
// return this.value;
// }
// }
// }

// const objEl = createCalculator(10);
// console.log(objEl.add(2));
// console.log(objEl.subtract(3));

// const objEl1 = createCalculator(20);
// console.log(objEl1.add(2));
// console.log(objEl1.subtract(3));



// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting(userName) {
// return () => `Hello, ${userName}!`
// }

// const greeting = createGreeting('John');
// console.log(greeting());

// const greeting1 = createGreeting('John1');
// console.log(greeting1());

// console.log(greeting());


// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(passLength) {
// return (password) => password.length < passLength;
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password'));
// console.log(isPasswordValid('secret'));

// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

// function sumDigits(num) {
// if (num < 10) return num;
// else return num % 10 + sumDigits(Math.floor(num / 10));
// }

// console.log(sumDigits(123));
// console.log(sumDigits(456789));


// второй семинар

// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const Person = {
    name: this.name,
    age: this.age,
    gender: this.gender,
    introduce: function () {
      console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName: function (name) {
        this.name = name;
    }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce();
Person.changeName("Mike");
Person.introduce();

// Задание 2 (20минут)


// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.
const Animal = {
    name: this.name,
    eat: function () {
      console.log(`${this.name} кушает.`);
    }
}

const Dog = {
    name: this.name,
    bark: function () {
      console.log(`${this.name} лает.`);
    }
}

Dog.name = "Боб";
Dog.eat = Animal.eat;
Dog.eat();


// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    }
}
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3]));


// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person2 {
    constructor(name, age) {
        this.name = name; 
        this.age = age;     
    }

    introduce = () => {
      console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    }    
}

const user1 = new Person2('John', 25);
const user2 = new Person2('Bob', 27);
user1.introduce();
user2.introduce();

// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890
class BankAccount {
    static bankName = "sber";
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit = (amout) => { this.balance += amout }
    withdraw = (amout) => {
        if (this.balance - amout > 0) {
            this.balance -= amout;
            this.newBalance('Withdrawn', amout);
        } else console.log(`нет денег на счете ${this.accountNumber}`);
    }
    newBalance = (operation, amount) => {
        console.log(`${operation} ${amount} into account ${this.accountNumber}`);
        console.log(`Total ${this.balance}`);
    }
}
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account


// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)