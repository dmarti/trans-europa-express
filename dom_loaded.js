(function(){
	var wD = document.wrappedJSObject;
	var abg = wD.createElement('script');
	abg.innerHTML = "if (window.hasOwnProperty('adsbygoogle') && window.adsbygoogle) { window.adsbygoogle.requestNonPersonalizedAds=1; } else { var adsbygoogle = []; adsbygoogle.requestNonPersonalizedAds=1;}";
	wD.documentElement.appendChild(abg);
	wD.documentElement.removeChild(abg);
})();

