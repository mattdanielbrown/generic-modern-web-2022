"use strict";

import * as lib_smooth_scroll_polyfill_and_native from "./lib/smooth-scroll-polyfill-and-native";

function setup() {
	lib_smooth_scroll_polyfill_and_native.implementPolyfill();
}

function whenReadyAction() {
	setup();
	const mobileNavControl = document.getElementById('mobile-nav-control');
	const navigationList = document.querySelector('nav > ul');
	const navigationBar = document.querySelector('nav');
	const mobileNavControlLabel = document.querySelector('#mobile-nav-control ~ label');
	
	
	mobileNavControl.addEventListener('change', function () {
		navigationBar.classList.toggle('displayed');
		if (this.checked === true) {
			mobileNavControlLabel.innerHTML = 'Close';
		} else {
			mobileNavControlLabel.innerHTML = 'Menu';
		}
	});
	document.addEventListener("touchstart", function () {}, true);
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	whenReadyAction();
});
