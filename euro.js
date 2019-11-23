(function(){
	var retryTimeout = 50;
	var attempts = 100;
	var europeanStuffDone = {};

	function doDataLayer() {
		var wD = document.wrappedJSObject;
		var tmp = wD.createElement('script');
		tmp.innerHTML = "window.dataLayer = window.dataLayer || []; " +
				"window.dataLayer.push({'allow_ad_personalization_signals': false});"
		wD.documentElement.appendChild(tmp);
		wD.documentElement.removeChild(tmp);
	}

	function insistOnEuropeanitude(attempts) {
		var wW = window.wrappedJSObject;

		// put Aloodo into "European mode". 
		if ('aloodo' in wW && !europeanStuffDone.hasOwnProperty('aloodo')) {
			wW.aloodo.setEuropeanMode(true);
			console.log("Aloodo in European mode");
			europeanStuffDone['aloodo'] = true;
		}

		// Google Tag Manager
		if ('googletag' in wW && !europeanStuffDone.hasOwnProperty('googletag')) {
			doDataLayer();
			wW.googletag.pubads().setRequestNonPersonalizedAds(1);
			console.log("googletag present.  Set non-personalized ads.");
			europeanStuffDone['googletag'] = true;
		} 

		// Google Analytics
		if ('ga' in wW && !europeanStuffDone.hasOwnProperty('ga')) {
			doDataLayer();
			wW.ga('set', 'anonymizeIp', true);
			wW.ga('set', 'displayFeaturesTask', null);
			console.log("ga options set");
			europeanStuffDone['ga'] = true;
		} 
		
		if (attempts) {
			setTimeout(insistOnEuropeanitude, retryTimeout, attempts -1);
		}
	}
	console.log("Content script euro.js starting.");
	insistOnEuropeanitude(attempts - 1);
})();

