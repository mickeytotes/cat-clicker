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
	}]

function loadCats(array) {
	for (var i = 0; i < array.length; i++) {
		var catEntry = document.createElement('div');

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
		catEntry.appendChild(catCount);
		catImg.id = array[i].imgid;
		catCount.id = array[i].countid;

		document.body.appendChild(catEntry);
	}
}

loadCats(cats);