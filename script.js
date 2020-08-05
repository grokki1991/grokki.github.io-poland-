	let text = document.querySelector('.out');
	let info = document.querySelector('.info');
	let textBtn = document.querySelector('.text-btn');
	let input = document.querySelector('.text');
	let btn = document.querySelector('button');
	let form = document.querySelector('.form');
	let livesText = document.querySelector('.lives');
	let themeText = document.querySelector('.theme-text');
	let themeBox = document.querySelector('.theme-box');
	let themes = document.querySelectorAll('.this-theme');
	let points = document.querySelector('.points');
	let picture = document.querySelector('.picture');
	let tip = document.querySelector('.guess');
	let point = 0;
	btn.onclick = function start() {
		themeBox.classList.add('theme-game');
		themeText.classList.add('active');
		btn.classList.add('no-active');

		let biology = [
		'генетика', 'физиология', 'цитоплазма', 'метаболизм', 'митохондрия', 'наследственность', 'холестерин', 'клетка', 'организм', 'кровь', 'железа', 'растение', 'грибы', 'зародыш', 'цветы', 'фотосинтез', 'животное', 'ген', 'гормоны', 'зигота'
		];
		let history = [
		'буржуазия', 'коммунизм', 'крепостничество', 'либерализм', 'пантеон', 'война', 'король', 'летопись', 'удел', 'русь', 'славяне', 'династия', 'конвенция ', 'самодержавие', 'князь', 'монархия'
		];
		let literature = [
		'вдохновение', 'стихотворение', 'писатель', 'баллада', 'беллетристика', 'гипербола', 'рифма', 'ритм', 'жанр', 'ямб', 'сочинение', 'книга', 'хорей', 'проза', 'эпитет', 'драма', 'роман'
		];
		let others = [
		'юмор', 'шалаш', 'река', 'сахар', 'лес', 'трава', 'природа', 'работа', 'день', 'любовь', 'яблоко', 'кино', 'игра', 'гром', 'вода', 'случайность', 'солнце', 'деревня'
		];
		let math = [
		'треугольник', 'дискриминант', 'интеграл', 'логарифм', 'параллелограмм', 'процент', 'степень', 'число', 'уравнение', 'знаменатель', 'сумма', 'разность', 'круг', 'квадрат', 'корень', 'разность', 'катет', 'гипотенуза', 'деление', 'парабола', 'числитель', 'куб', 'факториал'
		];

		for (theme of themes) {
			theme.onclick = function() {
				picture.classList.add('no-active');
				points.classList.add('active');
				points.innerHTML = 'Очки - ' + point;
				let thisTheme = this.getAttribute('data-theme');
				themeText.classList.remove('active');


				if (thisTheme == 'biology') {
					getTheme();
					genre(biology);
				}
				else if (thisTheme == 'history') {
					getTheme();
					genre(history);
				}
				else if (thisTheme == 'literature') {
					getTheme();
					genre(literature);
				}
				else if (thisTheme == 'others') {
					getTheme();
					genre(others);
				}
				else if (thisTheme == 'math') {
					getTheme();
					genre(math);
				}
			}
		}


		function genre(name) {
				form.classList.add('active');
				text.classList.add('active');
				info.classList.add('active');
				livesText.classList.add('active');
				form.classList.remove('no-active');
				text.classList.remove('no-active');
				livesText.classList.remove('no-active');
				input.value = '';
				let word = name[Math.floor(Math.random() * name.length)];
				let empty = [];
				for (i = 0; word.length > i; i++) {
					empty[i] = '_';
				}
				tip.onclick = function() {
					empty[1] = word[1];
					text.innerHTML = empty;
				}
				let think = word.length;
				let lives = 5;
				livesText.innerHTML = 'Жизни - ' + lives;
				info.innerHTML = '(Угадайте слово или букву)';
				text.innerHTML = empty.join(' ');
				textBtn.onclick = function() {
					if (think > 0 && lives > 0)  {
						let guess = input.value;
						guess = guess.toLowerCase();
						if (guess.length == 1) {
							for (let j = 0; j < word.length; j++) {
								if (guess === empty[j]) {
										input.value = '';
										info.innerHTML = 'Такая буква уже есть';
										break;
									}
								// Проверка на наличие, уже отгаданной буквы

								else if (word[j] === guess) {
									empty[j] = guess;
									think--;				
									text.innerHTML = empty.join(' ');
										if (think == 0) {
											input.value = '';
											point+=25;
											points.innerHTML = 'Очки - ' + point;
											return info.innerHTML = 'Победа! А ты молодец)';
										}
										else if (think >= 5) {
											info.innerHTML = 'Угадайте еще ' + think + ' букв';
										}
										else if (think === 1) {
											info.innerHTML = 'Угадайте еще ' + think + ' букву';
										}	
										else {
											info.innerHTML = 'Угадайте еще ' + think + ' буквы';
										}
										input.value = '';
									}
									// Конец условия на добавление буквы

							}
							if (!(word.includes(guess))) {
								input.value = '';
								lives--;
								livesText.innerHTML = 'Жизни - ' + lives;
								if (lives >= 5) {
								info.innerHTML = 'Еще есть ' + lives + ' жизней.';
								}
								else if (lives < 5 && lives >1 ) {
									info.innerHTML = 'Осталось ' + lives + ' жизни...';
								}
								else if (lives === 1) {
									info.innerHTML = 'У вас осталось всего - ' + lives + ' жизни.' + ' Будьте аккуратны!';
								}
								else if (lives === 0) {
									info.innerHTML = 'У вас ' + lives + ' жизней...' + ' Дела крайне плохи....';
								}
							}
							// Конец цикла перебора букв
							input.value = '';
						}
						// Конец условия, если была введена одна буква

						else if (guess.length > 1 && (guess !== word)) {
							input.value = '';
							lives--;
							livesText.innerHTML = 'Жизни - ' + lives;
							if (lives >= 5) {
								info.innerHTML = 'Еще есть ' + lives + ' жизней.';
							}
							if (lives < 5 && lives >1 ) {
								info.innerHTML = 'Осталось ' + lives + ' жизни...' + ' Может попробуете сперва отгадать букву?';
							}
							else if (lives === 1) {
								info.innerHTML = 'У вас осталось всего - ' + lives + ' жизни.' + ' Будьте аккуратны!';
							}
							else if (lives === 0) {
								info.innerHTML = 'У вас ' + lives + ' жизней...' + ' Дела крайне плохи....';
							}	
						} 	

						else if (guess.length == 0) {
							info.innerHTML = 'Вы ничего не ввели!';
						} 

						else if (guess === word) {
							input.value = '';
							empty = guess;
							text.innerHTML = empty;
							think = 0;
							point+=100;
							points.innerHTML = 'Очки - ' + point;
							return info.innerHTML = 'Ух ты!! Быстро вы угадали! Да, это - ' + '<span style="color:red">' + guess + '</span>' +'\u00A0' + ')';
						} 
						
					}
					// Конец проверки на количество угаданных букв и оставшихся жизней
					else if (lives === 0) {
						text.classList.add('no-active');
						livesText.classList.add('no-active');
						form.classList.add('no-active');
						point=0;
						return info.innerHTML = 'Вы проиграли... Это - ' + '<span style="color:red">' + word + '</span>' + '. Не хотите ли попробовать снова?)';
					}
					else {
						input.value = '';
						return info.innerHTML = 'Можете сыграть еще :)';
					}
				}

			}
		}

		function getTheme() {
			$('.themes').addClass('theme-color');
			$('.themes').not(this).removeClass('theme-color')
		}
