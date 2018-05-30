(function(){
	// Try 20 times/s for 3 s
	var retryTimeout = 50;
	var attempts = 60;
	console.log("Content script euro.js starting.");

	function insistOnEuropeanitude(attempts) {
		var wW = window.wrappedJSObject;

		// put Aloodo into "European mode". 
		if ('aloodo' in wW) {
			wW.aloodo.setEuropeanMode(true);
			console.log("Aloodo in European mode");
		}
	
		if ('googletag' in wW) {
			console.log("googletag present.  Attempting to set non-personalized ads.");
			wW.googletag.pubads().setRequestNonPersonalizedAds(1);
		} 

		if ('ga' in wW) {
			wW.ga('set', 'anonymizeIp', true);
			wW.ga('set', 'displayFeaturesTask', null);
			console.log("ga options set");
		} 
		
		if (attempts) {
			setTimeout(insistOnEuropeanitude, retryTimeout, attempts -1);
			return;
		}
	}
	insistOnEuropeanitude(attempts - 1);
	console.log("Content script euro.js ending.");
})();

