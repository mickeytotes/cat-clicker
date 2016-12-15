/*========== MODEL ========= */

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

/* ============ OCTOPUS ========== */

var octopus = {

	init: function() {
		// set current cat to first in the list
		model.currentCat = model.cats[0];

		// initialize views
		catView.init();
		catListView.init();
		adminView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	// set the currently selected cat to the object passed in
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	// increment the count for the current cat
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	},

	openAdmin: function() {
		adminView.render();
	},

	closeAdmin: function() {
		adminView.init();
	}

};

/* ========= VIEW =========== */

var catView = {

	init: function(){
		// set pointers to DOM elements
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		// increment the current cat's count when image is clicked
		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.homeElem = document.getElementById('hc');
		this.homeElem.addEventListener('click', function() {
			var homeImg = document.getElementById('cat-img');
			var counter = document.getElementById('cat-count');
			homeImg.src = "images/kitty-litter.jpg";
			counter.innerHTML = '';
		});
		//if this.render() was called, the first cat in the array would load
		//instead of the home image
		//this.render();
	},

	render: function() {
		// update DOM elements with values from current cat
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {
	init: function() {
		// store pointers to DOM elements
		this.catListElem = document.getElementById('cat-list');

		// render this view and update DOM elements with corresponding values
		this.render();
	},

	render: function() {
		var cat, elem, i;

		// get cats we'll render by the octopus
		var cats = octopus.getCats();

		// empty the cat list
		this.catListElem.innerHTML = '';

		// iterate over the cats to generate list (add listener to each name)
		for (i = 0; i < cats.length; i++) {

			cat = cats[i];


			elem = document.createElement('li');
			elem.textContent = cat.name;


			// on click, setCurrentCat and render catView
			// (use closures to connect the value of cat
			//	to the click event)
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			// add the element (name) to the list
			this.catListElem.appendChild(elem);
		}
	}
};

var adminView = {
	var adminForm = document.getElementById('admin-form');

	init: function () {
		//var adminForm = document.getElementById('admin-form');
		adminForm.style.display = 'none';

		this.render();

	},

	render: function () {
		var adminBtn = document.getElementById('admin-button');
		adminBtn.addEventListener('click', function() {
			adminForm.style.display = 'block';
		})
	}

};

// Run
octopus.init();


/*render: function () {
		var adminBtn = document.getElementById('admin-button');
		adminBtn.addEventListener('click', function() {
			octopus.openAdmin();
		})
	}*/