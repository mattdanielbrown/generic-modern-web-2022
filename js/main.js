"use strict";

import * as lib_smooth_scroll_polyfill_and_native from "./lib/smooth-scroll-polyfill-and-native";

function setup() {
	lib_smooth_scroll_polyfill_and_native.implementPolyfill();
}

function whenReadyAction() {
	setup();

}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	whenReadyAction();
});
