// this function keeps track of how many times
// the cat gets clicked. We're doing important work over here.
// Just trying to make our country proud



/*document.getElementsByClassName('header-container').addEventListener('click', function() {
	var homeImg = document.getElementById('default-img');

	document.getElementById('now-cat').innerHTML = '';
	document.getElementById('now-cat').append(homeImg);
}, false);*/

var cats = [{
		name: "Toby",
		img: "images/happy-kitten.jpg",
		count: 0,
		imgid: 1,
		countid: 3
	},
	{
		name: "Cecile",
		img: "images/screaming.jpeg",
		count: 0,
		imgid: 2,
		countid: 4
	},
	{
		name: "Johnson",
		img: "images/bald-cat.jpg",
		count: 0,
		imgid: 5,
		countid: 6
	},
	{
		name: "Olivia",
		img: "images/waiting-cat.jpg",
		count: 0,
		imgid: 7,
		countid: 8
	},
	{
		name: "Stormio",
		img: "images/duh-cat.jpg",
		count: 0,
		imgid: 9,
		countid: 10
	}]

function loadCats(array) {
	for (var i = 0; i < array.length; i++) {
		var name = document.createElement('li');
		name.innerHTML = array[i].name;
		var count = array[i].count;

		var catImg = document.createElement('img');
		catImg.src = array[i].img;
		catImg.style.width = '200px';
		catImg.className = ("cat");


		// loads the cat corresponding to the name clicked
		name.addEventListener("click", (function(nameCopy, catImgCopy, countCopy) {
			return function() {
				var nameValue = nameCopy.innerHTML;
				var counter = document.getElementById('sample-count');
				var p = document.getElementById('sample-p');
				var cat = document.getElementById("now-cat");
				//counter.innerHTML = countCopy;
				p.innerHTML = '';
				counter.innerHTML = '';
				cat.innerHTML = '';
				p.append(nameValue);
				cat.append(catImgCopy);
				counter.append(countCopy);
				console.log(nameCopy);
				console.log(catImgCopy);
				console.log(countCopy);
			};
		})(name, catImg, count));

		// load menu bar with cat names
		document.getElementById('name-container').appendChild(name);

		// increases the count when the cat picture is clicked
		catImg.addEventListener("click", (function(countCopy) {
			return function() {
				var num = document.getElementById('sample-count');
				num.innerHTML = '';
				countCopy = Number(countCopy) + 1;
				num.append(countCopy);
				console.log(countCopy);
			};
		})(count));

	}

	//returns to default image when top logo is clicked
	var head = document.getElementById('hc');

	head.addEventListener('click', function() {
		var homeImg = document.createElement('img');
		homeImg.src = "images/kitty-litter.jpg";

		document.getElementById('now-cat').innerHTML = '';
		document.getElementById('sample-count').innerHTML = '';
		document.getElementById('now-cat').appendChild(homeImg);
	}, false);

}

loadCats(cats);

/*function loadNames(array) {
	for (var i = 0; i < array.length; i++) {
		var name = document.createElement('li');
		name.innerHTML = array[i].name;

		name.addEventListener("click", (function(nameCopy) {
			return function() {
				var nameValue = nameCopy.innerHTML;
				document.getElementById('sample-box').innerHTML = '';
				document.getElementById('sample-box').append(nameValue);
				console.log(nameCopy);
			};
		})(name));

		document.getElementById('name-container').appendChild(name);
	}
}*/

//---------------------------------------
//scratch
/*function loadNames(array) {
	for (var i = 0; i < array.length; i++) {
		var name = document.createElement('li');
		name.innerHTML = array[i].name;
		var img = array[]

		name.addEventListener("click", (function(nameCopy) {
			return function() {
				var nameValue = nameCopy.innerHTML;
				document.getElementById('sample-box').innerHTML = '';
				document.getElementById('sample-box').append(nameValue);
				console.log(nameCopy);
			};
		})(name));

		document.getElementById('name-container').appendChild(name);
	}
}*/

/*

function getSelectedCat(array) {

}


*/

