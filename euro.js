window.addEventListener('load', function() {
	console.log("Content script euro.js starting.");

	// put Aloodo into "European mode".  (For pre-#GDPR testing.)
	if ( window.hasOwnProperty('aloodo')) {
		window.eval('aloodo.setEuropeanMode(true)');
	}
	
	if (window.hasOwnProperty('googletag')) {
		console.log("googletag present.  Attempting to set non-personalized ads.");
		window.eval('googletag.pubads().setRequestNonPersonalizedAds(1)');
	}

	if (window.hasOwnProperty('ga')) {
		console.log("Google Analytics present. Setting anonymizeIp to true and disabling Advertising Reporting Features.");
		window.eval("window.ga('set', 'anonymizeIp', true)");
		window.eval("window.ga('set', 'displayFeaturesTask', null)");
	} else {
		console.log('no window.ga present');
	}
	
	console.log("Content script euro.js ending.");
});

