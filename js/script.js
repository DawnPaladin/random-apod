function getRandomDate() {
	var start = new Date("June 20, 1995").getTime();
	var today = new Date().getTime();
	return new Date(start + Math.random() * (today - start));
}
