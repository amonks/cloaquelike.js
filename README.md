# cloaquelike.js

## vertical scrolling websites

### Demo

Check out a [working demo](http://amonks.github.io/cloaquelike.js/) of the output

Be sure to view the source and see how the input happens.

### what it do

cloaquelike.js provides a function, `cloaquelike(elements, container)` which takes an array of objects, and appends them to a given container object

	[
		{
			element: $('<iframe src="http://player.vimeo.com/video/63618711" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
			width: "grid_4 prefix_3",
			height: 300
		},
		{
			element: $('<img src="http://www.petfinder.com/wp-content/uploads/2012/11/99059361-choose-cat-litter-632x475.jpg" />'),
			width: "grid_3 prefix_6",
			height: 200
		},
	]

The element is an element object, the width is in [960.gs](http://960.gs) syntax, and the height is an integer px height.

The elements can be anything, iframes, objects, images, whatever you like. Just make sure their width and height are set to 100%.