window.addEventListener('load', function() {
	if (window.hasOwnProperty('googletag') {
		alert("Found googletag.");
		if (googletag.hasOwnProperty('setRequestNonPersonalizedAds')) {
			console.log("googletag present and allows setting non-personalized ads. Euro-powers, activate!");
			googletag.pubads().setRequestNonPersonalizedAds(1)
		}
	}
}

