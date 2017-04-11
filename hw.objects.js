'use strict';

// var a = [1, 2];
// var b = [2, 3];
// console.log(a.concat([3]));

// /////

// var uniq = function(array) {
// 	var result = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (result.indexof(array[i]) === -1) {
// 			result.push(array[i]);
// 		};
// 	};
// 	return result;
// };


/////



// var objHuman = {
// 	Name: 'Ivan',
// 	Lastname: 'Petrov',
// 	Age: 21,
// 	Interests: ['programming', ' music', ' anime']
// };
// console.log('Biography: ');
// for (var property in objHuman) {
// 	console.log( property + ': ' + objHuman[property]);
// }

///////

function filter(arr, func) {
  var temp = [];
for (var i; i < arr.length; i++) {
	if (func(arr[i])) {
		temp.push(arr[i])
	};
};
 return temp;
};

var array = filter([1, 2, 3], function(x){return (x < 0);});
console.log(array);

