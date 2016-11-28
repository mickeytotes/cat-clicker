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

		catImg.addEventListener("click", function() {
			catCount.innerHTML = Number(catCount.innerHTML) + 1;
			console.log(catCount.innerHTML);
			console.log(event.target);
			console.log(this);
		}, false);

/*	catImg.addEventListener("click",function(){
		var index = i;
		var elem = document.getElementsByClassName('cat');
	    array[index].count = array[index].count + 1;
	    var total= array[index].count;
	    var numb = document.getElementsByTagName("p")[index];
	    numb.innerHTML = total;
	},false);*/

//for (var i; i < array.length; i++){
//		var image = array[i].image;
//		image.addEventListener("click", function() {
//			var count = array[i].count;
//			count.innerHTML = Number(count.innerHTML) + 1;
//			console.log(count.innerHTML);
//		}, false);

		document.body.appendChild(catEntry);
	}
}
/*var catImage1 = cats.cat[0];

catImage1.addEventListener("click", fuction() {
	var clickCount = catImage1.count;
	clickCount = Number(clickCount) + 1;
}, false);*/

loadCats(cats);


//var num = document.getElementById('counter');
//		num.innerHTML = Number(num.innerHTML) + 1;
//		console.log(num.innerHTML);

