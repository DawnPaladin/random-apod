jQuery(document).ready(function(){
	requestImage(getRandomDate());
	jQuery('#another-btn').click(function(){ requestImage(getRandomDate()); });
});

function getRandomDate() {
	var start = new Date("June 16, 1996").getTime();
	var today = new Date().getTime();
	return new Date(start + Math.random() * (today - start));
}

function formatDate(date) {
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function requestImage(dateObj) {
	console.log("Requesting image for", formatDate(getRandomDate()));
	jQuery.getJSON('https://api.nasa.gov/planetary/apod', {
		date: formatDate(dateObj),
		concept_tags: false,
		api_key: 'GcueLfEVOwz40G8milIABX9hA3tpqzn2gvxW7mGe'
	}, setImage);
}

function setImage(json) {
	console.dir(json);
	if (json.error) {
		console.error(json.error);
		jQuery('.title').text(json.error);
		requestImage(getRandomDate());
	} else {
		jQuery('.picture img').attr('src', json.url);
		var backgroundImage = 'url('+json.url+')';
		jQuery('.blurred-bg').css('background-image', backgroundImage);
		jQuery('.title').text(json.title);
		jQuery('.explanation').text(json.explanation);
	}
}
