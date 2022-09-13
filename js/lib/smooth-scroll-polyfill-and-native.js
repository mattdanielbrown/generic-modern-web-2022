// [Source: https://www.npmjs.com/package/smoothscroll-polyfill]

"use strict";

import smoothscroll from 'smoothscroll-polyfill';

function implementPolyfill() {
	smoothscroll.polyfill();
}

// Scroll to specific values (scrollTo is the same)
function smoothScrollToPosition(scrollToPosition) {
	window.scroll({top: scrollToPosition, left: 0, behavior: 'smooth'});
	// window.scrollTo({top: scrollToPosition, left: 0, behavior: 'smooth'});
}

// Scroll certain amounts from current position
function smoothScrollByAmount(scrollAmount) {
	window.scrollBy({top: scrollAmount, left: 0, behavior: 'smooth'});
}

// Scroll to a certain element
function smoothScrollToSpecificElement(targetElement) {
	document.targetElement.scrollIntoView({behavior: 'smooth'});
}

module.exports = {
	implementPolyfill : implementPolyfill,
	smoothScrollToPosition: smoothScrollToPosition,
	smoothScrollByAmount: smoothScrollByAmount,
	smoothScrollToSpecificElement: smoothScrollToSpecificElement
}
