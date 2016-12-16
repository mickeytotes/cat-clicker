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
	},

	/*pushData: function() {
		var newName = document.getElementById('admin-name').value;
		var newImg = document.getElementById('admin-img').value;
		var newCount = document.getElementById('admin-count').value;

		model.currentCat.push({name: newName});
		model.currentCat.push({imgSrc: newImg});
		model.currentCat.push({clickCount: newCount});
		//console.log("pushData called");
	}*/

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
		//if this.render() is called, the first cat in the array would load
		//instead of the home image
		this.render();
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
	init: function () {
		// hide form by default
		var adminForm = document.getElementById('admin-form');
		adminForm.style.display = 'none';

		// store pointers to DOM elements
		this.nameElem = document.getElementById('admin-name');
		this.imgElem = document.getElementById('admin-img');
		this.countElem = document.getElementById('admin-count');

		this.render();

	},

	render: function () {
		var adminBtn = document.getElementById('admin-button');

		// display form on click of Admin button
		adminBtn.addEventListener('click', function() {
			var adminForm = document.getElementById('admin-form');
			adminForm.style.display = 'block';

			var currentCat = octopus.getCurrentCat();
			document.getElementById('admin-name').value = currentCat.name;
			document.getElementById('admin-img').value = currentCat.imgSrc;
			document.getElementById('admin-count').value = currentCat.clickCount;
		})


		var saveBtn = document.getElementById('admin-save');

		saveBtn.addEventListener('click', function() {
			//octopus.pushData();

			var newName = document.getElementById('admin-name').value;
			var newImg = document.getElementById('admin-img').value;
			var newCount = document.getElementById('admin-count').value;

			model.currentCat.push({name: newName});
			model.currentCat.push({imgSrc: newImg});
			model.currentCat.push({clickCount: newCount});


			catView.render();
			catListView.render();
			console.log("data saved");
		})

		var cancelBtn = document.getElementById('admin-cancel');

		cancelBtn.addEventListener('click', function() {
			var aForm = document.getElementById('admin-form');
			aForm.style.display = 'none';
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