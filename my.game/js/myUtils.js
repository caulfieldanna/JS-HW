;(function(){
	//Massiv dlja hranenija igrovogo polja
	var gamePlace = [];
	var size; //Razmer polja
	var container; //Osnovnoj html dokument
	var currentChooseElement = null; //Tekushhij vybrannyj jelement
	var itemSize = 40;
	var score = 0;
	var scoreField;

	//Funkcija generacija chisla v zadannom intervale
	function getRandomNumberInInterval(min, max){
		return Math.round(Math.random()*(max - min) + min);
	}

	//Funkcija nahodit ot 3 i bolee v rjad i udaljaet ih,
	//vozvrashhaja kolichestvo udalennyh jelementov
	function cheak(){
		var arrIndexForDelete = [];
		//Proverjaem vse stroki
		var tempNum;
		for(var i=0; i<size; i++){
			for(var j=0; j<size; j++){
				tempNum = gamePlace[size*i+j];
				count = 1;
				for(var z=j+1; z<size; z++){
					if(tempNum === gamePlace[size*i+z]){
						count++;
					} else {
						break;
					}
				}
				if(count>=3){
					for(var z=0; z<count; z++){
						arrIndexForDelete.push(size*i+j+z);
					}
				}
			}
		}
		//Proverjaem vse stolbcy
		for(var i=0; i<size; i++){
			for(var j=0; j<size; j++){
				tempNum = gamePlace[size*j+i];
				count = 1;
				for(var z=j+1; z<size; z++){
					if(tempNum === gamePlace[size*z+i]){
						count++;
					} else {
						break;
					}
				}
				if(count>=3){
					for(var z=0; z<count; z++){
						arrIndexForDelete.push(size*(j+z)+i);
					}
				}
			}
		}
		//Udaljaem jelementy
		for(var i = 0; i < arrIndexForDelete.length; i++){
			gamePlace[arrIndexForDelete[i]]  = undefined;
		}

		score += arrIndexForDelete.length;
		return arrIndexForDelete.length;
	}

	//Funkcija skryvaet vse div jelementy pomechennye v massive kak undefined
	function fadeToUndefined(){
		var listOfDivs = container.getElementsByTagName('div');

		for(var i = 0; i < listOfDivs.length; i++) {
			if(gamePlace[i] === undefined){
				$(listOfDivs[i]).fadeTo(500, 0);
			}
		}
	}

	//Funkcija obrabatyvaet nazhatija na jelementy i ih peremeshhenie s sosednimi
	function clickProcees(event){
		console.log(event.target);
		event.target.classList.toggle('choosen')
		if(currentChooseElement == null){
			currentChooseElement = event.target;
		} else {
			//Menjaem mestami jelementy v massive
			var lastIndex = currentChooseElement.getAttribute('data-index');
			var newIndex = event.target.getAttribute('data-index');
			var temp = gamePlace[lastIndex];
			gamePlace[lastIndex] = gamePlace[newIndex];
			gamePlace[newIndex] = temp;
			currentChooseElement = null;
			updateRender();
			circleCheak();
		}
	}

	//Funkcija pererisovyvaet igrovoe pole
	function updateRender(){
		var html = "";
		for(var i=0; i < size*size; i++){
			var randomNumber = getRandomNumberInInterval(1,5);
			if (gamePlace[i])	{
				html = html + createGemDivHTML(i, gamePlace[i]);
			} else {
				html = html + createGemDivHTML(0, gamePlace[i]);;
			}

		}
		container.innerHTML = html;
	}

	//Cikl sdvigaet pustye jachejki vverh igrovogo polja
	function shiftEmptyCells(){
		var tempNum;
		for(var i=0; i<size; i++){
			var countOfUndefined = 0;
			for(var z=size-1; z>=0; z--){
				if( gamePlace[z*size + i] === undefined){
					countOfUndefined++;
				} else if (countOfUndefined > 0) {
					gamePlace[(z + countOfUndefined)*size + i] = gamePlace[z*size + i];
					gamePlace[z*size + i] = undefined;
				}
			}
		}
	}

	//Zapolnjaem pustye jachejki novymi figurami
	function fillEmptyCells(){
		var html = "";
		for(var i=0; i < size*size; i++){
			var randomNumber = getRandomNumberInInterval(1,5);
			if (gamePlace[i] !== undefined)	{
				html = html + createGemDivHTML(i, gamePlace[i]);
			} else {
				var randomNumber = getRandomNumberInInterval(1,5);
				html = html + createGemDivHTML(i, randomNumber);
				gamePlace[i] = randomNumber;
			}
		}
		container.innerHTML = html;
	}

	//Funkcija realizujushaja cikl proverki, uborki 3 v rjad, i generacii
	//novyh jelementov
	function circleCheak(){
		//Cikl rabotaet poka vstrechajutsja tri v rjad
		setTimeout(function(){
			//Funkcija nahodit ot 3 i bolee v rjad i udaljaet ih
			if (cheak()) {

				//Najdeny tri v rjad
				updateScore();

				fadeToUndefined() //Animacija udalenija
				setTimeout(function(){
					updateRender();
					setTimeout(function(){
						//Sdvigaem pustye jachejki vverh igrovogo polja
						shiftEmptyCells();
						updateRender();
						setTimeout(function(){
							//Zapolnjaem pustye jachejki vverh igrovogo polja
							fillEmptyCells();
							updateRender();
							circleCheak()
						},500);
					},300);
				},500);
			} else {
				//Ne najdeny tri v rjad
			}
		},500);
	}

	function tab(str, length, filChar = ' ') {
		str = str.toString();
		return str.length >= length ? str : tab(filChar + str, length, filChar);
	}

	function updateScore() {
		scoreField.innerHTML = tab(score, 12, '0');
	};


	function createGemDivHTML(pos, num){
		return "<div data-index=\"" + pos +
			"\" style=\"background-image:url(img/"+ num +
			".png);width: " + itemSize + "px; height:" + itemSize + "px;\"></div>";
	}

	window.Match3 = {
		createGamePlace: function(divContainer, n){
			size = n;
			container = document.getElementById(divContainer);
			scoreField = document.querySelector('.score');
			container.style = "display: flex;	flex-direction: row;" +
				"flex-wrap: wrap; width: "+ (itemSize*n) +"px; height: "+ (itemSize*n) +"px;";
			//Sozdaem DIV jelementy figur
			var html = "";
			for(var i=0; i < n*n; i++){
				var randomNumber = getRandomNumberInInterval(1,5);
				html = html + createGemDivHTML(i, randomNumber);
				gamePlace.push(randomNumber);
			}
			container.innerHTML = html;
			//Dobavljaem slushatelja na kontejner s igrovym polem
			container.onclick = clickProcees;

			circleCheak();
			console.log(gamePlace);
		}
	}

	$(document).ready(function() {

	container.addEventListener('mouseover', function(event){
		if (event.target != container && container.contains(event.target)) {
			event.target.classList.toggle('hover');
		};
	});

	container.addEventListener('mouseout', function(event){
			if (event.target != container && container.contains(event.target)) {
			event.target.classList.toggle('hover');
		};
	});

});

}());