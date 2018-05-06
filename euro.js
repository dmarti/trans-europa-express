window.addEventListener('load', function() {
	// put Aloodo into "European mode".  (For pre-#GDPR testing.)
	if ( window.eval('aloodo') && (window.eval('typeof(aloodo.setEuropeanMode)') == 'function')) {
		window.eval('aloodo.setEuropeanMode(true)');
	}
	
	if (window.eval('googletag')) {
		console.log("googletag present.  Attempting to set non-personalized ads.");
		window.eval('googletag.pubads().setRequestNonPersonalizedAds(1)');
	}
});

