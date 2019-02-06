(function(){
	var retryTimeout = 50;
	var attempts = 100;
	var europeanStuffDone = {};
	console.log("Content script euro.js starting.");

	function insistOnEuropeanitude(attempts) {
		var wW = window.wrappedJSObject;

		// put Aloodo into "European mode". 
		if ('aloodo' in wW && !europeanStuffDone.hasOwnProperty('aloodo')) {
			wW.aloodo.setEuropeanMode(true);
			console.log("Aloodo in European mode");
			europeanStuffDone['aloodo'] = true;
		}

		// Facebook pixel
		// https://developers.facebook.com/docs/facebook-pixel/implementation/gdpr
		if ('fbq' in wW && !europeanStuffDone.hasOwnProperty('fbq')) {
			wW.fbq('consent', 'revoke');
			console.log("fbq present.  Called revoke.");
			europeanStuffDone['fbq'] = true;
		}

		// Google Tag Manager
		if ('googletag' in wW && !europeanStuffDone.hasOwnProperty('googletag')) {
			wW.googletag.pubads().setRequestNonPersonalizedAds(1);
			console.log("googletag present.  Set non-personalized ads.");
			europeanStuffDone['googletag'] = true;
		} 

		// Google Analytics
		if ('ga' in wW && !europeanStuffDone.hasOwnProperty('ga')) {
			wW.ga('set', 'anonymizeIp', true);
			wW.ga('set', 'displayFeaturesTask', null);
			console.log("ga options set");
			europeanStuffDone['ga'] = true;
		} 
		
		if (attempts) {
			setTimeout(insistOnEuropeanitude, retryTimeout, attempts -1);
		}
	}
	insistOnEuropeanitude(attempts - 1);
})();

