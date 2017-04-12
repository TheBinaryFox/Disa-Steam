(function() {
	function toggle(event) {
		// Get Version element.
		var target = event.target;
		while (target != null && target.tagName !== 'VERSION') {
			target = target.parentNode;
		}

		if (target == null) return;

		// Get Changelog element.
		var changelog = target.parentNode;
		if (changelog.getAttribute('class') !== 'show') {
			changelog.setAttribute('class', 'show');
		} else {
			changelog.setAttribute('class', 'hide');
		}
	}

	function ready() {
		document.addEventListener('tap', toggle, true);
		document.addEventListener('click', toggle, true);

		// Hash
		var hash = window.location.hash.substring(1);
		if (!Number.isNaN(parseInt(hash))) {
			var tags = document.getElementsByTagName("NUMBER");
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].innerHTML.trim() === hash) {
					tags[i].parentNode.parentNode.setAttribute("class", "show");
				} else {
					tags[i].parentNode.parentNode.setAttribute("class", "hide");
				}
			}	
		}
	}

	switch (document.readyState) {
		case 'loading':
			document.addEventListener('DOMContentLoaded', ready);
			break;

		default:
			ready();
	}
})();

