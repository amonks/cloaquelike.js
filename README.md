# cloaquelike.js

cloaquelike.js provides a function, `cloaquelike(elements)` which takes an array of objects, like

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