const imageContainer = document.getElementById("image-container");

const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var screenCheck = debounce(function() {
    if (window.innerWidth >= 992 && window.innerHeight <= 615) {
        let newWidth = innerHeight / 1.8;
        imageContainer.style.width = `${newWidth}px`;
    } else {
        imageContainer.style.width = "80%";
    }
}, 250);

window.addEventListener('load', screenCheck);
window.addEventListener('resize', screenCheck);