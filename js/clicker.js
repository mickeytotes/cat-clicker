// this function keeps track of how many times
// the cat gets clicked. We're doing important work over here.
// Just trying to make our country proud


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


		name.addEventListener("click", (function(nameCopy, catImgCopy, countCopy) {
			return function() {
				var nameValue = nameCopy.innerHTML;

				document.getElementById('sample-p').innerHTML = '';
				document.getElementById('sample-count').innerHTML = '';
				document.getElementById('now-cat').innerHTML = '';
				document.getElementById('sample-p').append(nameValue);
				document.getElementById('now-cat').append(catImgCopy);
				document.getElementById('sample-count').append(countCopy);
				console.log(nameCopy);
				console.log(catImgCopy);
				console.log(countCopy);



			};
		})(name, catImg, count));

		document.getElementById('name-container').appendChild(name);

		catImg.addEventListener("click", (function(countCopy) {
			return function() {
				document.getElementById('sample-count').innerHTML = '';
				countCopy = Number(countCopy) + 1;
				document.getElementById('sample-count').append(countCopy);
				console.log(countCopy);
			};
		})(count));


		/*var catEntry = document.createElement('div');

		var catName = document.createElement('h2');
		catName.innerHTML = array[i].name;
		catEntry.appendChild(catName);

		var catImg = document.createElement('img');
		catImg.src = array[i].img;
		catImg.style.width = '200px';
		catImg.className = ("cat");
		catEntry.appendChild(catImg);

		var catCount = document.createElement('p');
		catCount.innerHTML = array[i].count;
		var num = catCount.innerHTML;
		catEntry.appendChild(catCount);
		catImg.id = array[i].imgid;
		catCount.id = array[i].countid;

		catImg.addEventListener("click", (function(numCopy) {
			return function(){
				numCopy = Number(numCopy) + 1;
				console.log(numCopy);
			};
		})(num));*/

		//document.body.appendChild(catEntry);
	}

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

