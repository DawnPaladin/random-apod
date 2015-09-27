function getRandomDate() {
	var start = new Date("June 20, 1995").getTime();
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
	console.log(JSON.stringify(json));
	console.log(json.url);
	jQuery('.picture img').attr('src', json.url);
}
