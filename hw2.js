'use strict';

//1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
//В решении использовать только математические и логические операторы. Результат в консоль.
//Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!

var x = [5, 2];
var y = [3, 3];
var z = [9, 6];

var xylength2 = (x[1] - y[1]) * (x[1] - y[1]) +  (x[0] - y[0]) * (x[0] - y[0]);
var yzlength2 = (y[1] - z[1]) * (y[1] - z[1]) +  (y[0] - z[0]) * (y[0] - z[0]);
var xzlength2 = (x[1] - z[1]) * (x[1] - z[1]) + (x[0] - z[0]) * (x[0] - z[0]);

((xzlength2 == xylength2 + yzlength2) || (yzlength2 == xylength2 + xzlength2) || (xylength2 == yzlength2 + xzlength2))
? (console.log('Треугольник прямоугольный')) : console.log('Треугольник не прямоугольный')

//3.Задан числовой массив. Найти минимальное значение в массиве и максимальное. Найти среднее всех элементов массива. Удалить первый и последний элементы
var arr = [1, 4, 7, 0, 3, 14, 9];

var min_i = 0;
var max_i = 0;

for (var i = 1; i < 7; i++) {
	// console.log(arr[min_i] + '>' + arr[i]);
	if (arr[min_i] > arr[i]) {
		min_i = i;
	};
	if (arr[max_i] < arr[i]) {
		max_i = i;
	};

};

console.log('max: ' + arr[max_i] + '\nmin: ' + arr[min_i]);



//////////////////////Найти (мин, макс) значение в массиве

var arr = [1, 4, 7, 0, 3, 14, 9];

console.log(Math.min.apply({}, arr));
console.log(Math.max.apply({}, arr));

//////////////////////найти среднее

var arr = [1, 4, 7, 0, 3, 14, 9];
var summ = 0;

for (var i = 0; i < arr.length; i++){
	summ += arr[i]	
}

console.log(summ/arr.length);

//////////////////////удалить первый

var arr = [1, 4, 7, 0, 3, 14, 9];

arr.splice(0, 1);

console.log(arr);

//////////////////////и последний элемент

var arr = [1, 4, 7, 0, 3, 14, 9];

arr.pop(0, 1);

console.log(arr);

////////////////////////////////////////////////////////////


//2. Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.
bubble sort
var arr = [17, 2, 10, 5, 4, 7, 3, 9, 6, 1, 8, 12, 14, 13, 11];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length - i; j++) {
		if (arr[j] > arr[j+1]) {
			var k = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = k;
		};
	};
	console.log(arr);

};

var arr = document.querySelectorAll('p');
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i].innerHTML);
}
