// cloaquelike.js
// vertical scrolling website
// andrew monks 2014

// function to take an array of image objects and return html
function cloaquelike(elements, container) {
	for (var i = 0; i <= elements.length - 1; i++) {
		objectContainer = $('<div class="objectbox ' + elements[i].width + '"></div>');
		objectContainer.css("height","" + elements[i].height + "px");
		elements[i].element.appendTo(objectContainer);
		objectContainer.appendTo(container);
		$('<div class="clear"></div>').appendTo(container)
	};
};