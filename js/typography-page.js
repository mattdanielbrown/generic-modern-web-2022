"use strict";

function main() {
	const allElements = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,small');
	
	allElements.forEach(function (eachElement) {
		let currentContent = eachElement.textContent;
		let style = getComputedStyle(eachElement);
		
		console.log(currentContent);
		let currentFontSize;
		if (style.fontSize && style.fontSize !== "") {
			currentFontSize = style.fontSize;
		} else {
			currentFontSize = "nil";
		}
		console.log(currentFontSize);
		eachElement.textContent = `${currentContent} (${currentFontSize})`;
	});
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	main();
});
