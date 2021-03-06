// this function keeps track of how many times
// the cat gets clicked. We're doing important work over here.
// Just trying to make our country proud


var cats = [{
		name: "Toby",
		img: "images/happy-kitten.jpg",
		count: 0
	},
	{
		name: "Cecile",
		img: "images/screaming.jpeg",
		count: 0
	},
	{
		name: "Johnson",
		img: "images/bald-cat.jpg",
		count: 0
	},
	{
		name: "Olivia",
		img: "images/waiting-cat.jpg",
		count: 0
	},
	{
		name: "Stormio",
		img: "images/duh-cat.jpg",
		count: 0
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
		name.addEventListener("click", (function(nameCopy, catImgCopy, index) {
			return function() {
				var nameValue = nameCopy.innerHTML;
				var counter = document.getElementById('sample-count');
				var p = document.getElementById('sample-p');
				var cat = document.getElementById("now-cat");
				p.innerHTML = '';
				counter.innerHTML = '';
				cat.innerHTML = '';
				p.append(nameValue);
				cat.append(catImgCopy);
				counter.append(array[index].count);
				console.log(nameCopy);
				console.log(catImgCopy);
				console.log(array[index].count);
			};
		})(name, catImg, i));

		// load menu bar with cat names
		document.getElementById('name-container').appendChild(name);

		// increases the count when the cat picture is clicked
		catImg.addEventListener("click", (function(index) {
			return function() {
				var num = document.getElementById('sample-count');
				num.innerHTML = '';
				array[index].count = array[index].count + 1;
				num.append(array[index].count);
				console.log(array[index].count);
			};
		})(i));

	}

	//returns to default image when top logo is clicked
	var head = document.getElementById('hc');

	head.addEventListener('click', function() {
		var homeImg = document.createElement('img');
		homeImg.src = "images/kitty-litter.jpg";

		document.getElementById('now-cat').innerHTML = '';
		document.getElementById('sample-count').innerHTML = '';
		document.getElementById('sample-p').innerHTML = '';
		document.getElementById('now-cat').appendChild(homeImg);
	}, false);

}

loadCats(cats);