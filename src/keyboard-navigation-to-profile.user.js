// ==UserScript==
// @name            Keyboard navigation to profile
// @description     Allow keyboard navigation to personal profile (G->P)
// @namespace       https://github.com/PurpleMagick/
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/*
// @match           https://serverfault.com/*
// @match           https://superuser.com/*
// @match           https://*.stackexchange.com/*
// @match           https://askubuntu.com/*
// @match           https://stackapps.com/*
// @match           https://mathoverflow.net/*
// @match           https://pt.stackoverflow.com/*
// @match           https://ja.stackoverflow.com/*
// @match           https://ru.stackoverflow.com/*
// @match           https://es.stackoverflow.com/*
// @match           https://meta.stackoverflow.com/*
// @match           https://meta.serverfault.com/*
// @match           https://meta.superuser.com/*
// @match           https://meta.askubuntu.com/*
// @match           https://meta.mathoverflow.net/*
// @match           https://pt.meta.stackoverflow.com/*
// @match           https://ja.meta.stackoverflow.com/*
// @match           https://ru.meta.stackoverflow.com/*
// @match           https://es.meta.stackoverflow.com/*
// @match           https://stackoverflowteams.com/c/*
// @version         1.0
// @author          VLAZ
// ==/UserScript==
(function() {
	const userProfile = document.querySelector("#user-profile-button img");

	if (!userProfile) {
		console.warn("Could not find a user profile on the page. The fix for keyboard navigation is not active.")
		return;
	}

	userProfile.classList.add("profile-me");
})();
