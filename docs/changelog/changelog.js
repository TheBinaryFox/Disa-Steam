'use strict';
(function() {
	/**
	 * Toggle a changelog visibility.
	 * @param {Event|HTMLElement} The element to toggle.
	 */
	function toggle(event) {
		// Get Version element.
		var target = event.target != null ? event.target : event; // Let's make some assumptions.
		while (target != null && target.tagName !== 'CHANGELOG') {
			target = target.parentNode;
		}

		if (target == null) return;

		// Get Changelog element.
		if (target.getAttribute('class') !== 'show') {
			target.setAttribute('class', 'show');
		} else {
			target.setAttribute('class', 'hide');
		}
	}

	/**
	 * Filter the changelogs.
	 * @param {function} func The filter function.
	 */
	function filter(func) {
		var changelogs = document.getElementsByTagName("CHANGELOG");
		for (var i = 0; i < changelogs.length; i++) {
			if (func({
				changelog: changelogs[i],
				version: changelogs[i].getElementsByTagName("VERSION")[0],
				changes: changelogs[i].getElementsByTagName("CHANGES")
			})) {
				changelogs[i].setAttribute("class", "show");
			} else {
				changelogs[i].setAttribute("class", "hide");
			}
		}
	}

	function ready() {
		document.addEventListener('tap', toggle, true);
		document.addEventListener('click', toggle, true);

		// Show changelog for a specific version.
		var hash = window.location.hash.substring(1);
		switch (hash.toLowerCase()) {
			case "all":
				filter(function(){ return true; });
				break;
			
			case "latest":
				// No need to do anything.
				break;

			case "upcoming":
				filter(function(changelog) {
					return changelog.version.getAttribute("upcoming") != null;
				});
				break;

			default:
				if (hash === '') return;
				filter(function(changelog) {
					return changelog.version.getElementsByTagName("NUMBER")[0].innerHTML.trim() === hash;
				});
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

