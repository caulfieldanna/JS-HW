;(function() {

	// var fieldArr = [];
	// var area = [null, null, null, null, null, null, null, null, null];

	// var genTable = function(n = 9) {
	// 	var tempContainer = document.createDocumentFragment();
	// 	for (var i = 0; i < n; i++) {
	// 		fieldArr.push(document.createElement('div'));
	// 		tempContainer.appendChild(fieldArr[i]);
	// 	};
	// 	return tempContainer;
	// };

	var decodeX0 = function(num) {
		if ( num === 1 ) {
			return 'X'
		} else if (num === 0) {
			return '0'
		};
		return '';
	};

	window.X0 = {
		gameAreaGenerator: function(area = [null, null, null, null, null, null, null, null, null]) {
			html = '';
			html += '<table><tbody>'
			for (var i = 0; i < 3; i++) {

				html += '<tr>';

				for (var j = 0; j < 3; j++) {
					html += '<td>' + decodeX0(area[(i*3 + j)]) + '</td>'
				};

				html += '</tr>';

			};
			
			html += '</tbody></table>'

			return html;
		}
	};


	window.arrayLib = {
		min: function(arr) {
			if (arr instanceof Array && arr.length > 0) {

				var mini = 0;

				for (var i = 1; i < arr.length; i++) {
					if ( arr[i] < arr[mini] ) {
						mini = i;
					};
				};

				return arr[mini];

			};
		},

		max: function(arr) {
			if (arr instanceof Array && arr.length > 0) {

				var maxi = 0;

				for (var i = 1; i < arr.length; i++) {
					if ( arr[i] > arr[maxi] ) {
						mini = i;
					};
				};

				return arr[maxi];

			};
		},

		mean: function(arr) {
			if (arr instanceof Array && arr.length > 0) {
				var sum = 0;
				for (var i = 0; i < arr.length; i++) {
					sum += arr[i];
				};
				return sum / arr.length;
			};

		},

		clone: function(arr) {
			if (arr instanceof Array && arr.length > 0) {
				var cloned = [];
				for (var i = 0; i < arr.length; i++) {
					cloned.push(arr[i]);
				};
				return cloned;
			};

		},

	};






})();