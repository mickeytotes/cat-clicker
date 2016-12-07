var model = {
	currentCat: null,
	cats: [
	{
		name: "Toby",
		imgSrc: "images/happy-kitten.jpg",
		clickCount: 0
	},
	{
		name: "Cecile",
		imgSrc: "images/screaming.jpeg",
		clickCount: 0
	},
	{
		name: "Johnson",
		imgSrc: "images/bald-cat.jpg",
		clickCount: 0
	},
	{
		name: "Olivia",
		imgSrc: "images/waiting-cat.jpg",
		clickCount: 0
	},
	{
		name: "Stormio",
		imgSrc: "images/duh-cat.jpg",
		clickCount: 0
	}
	]
};


var octopus = {

	init: function() {
		model.currentCat = model.cats[0];

		catView.init();
		catListView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}

};


var catView = {

	init: function(){

		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.homeElem = document.getElementById('hc');
		this.homeElem.addEventListener('click', function() {
			this.catImageElem.src = "images/kitty-litter.jpg";
		});

		//this.render();
	},

	render: function() {

		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function() {
		var cat, elem, i;

		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (i = 0; i < cats.length; i++) {

			cat = cats[i];


			elem = document.createElement('li');
			elem.textContent = cat.name;


			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));


			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();