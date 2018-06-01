setTimeout(function(){
	var wW = window.wrappedJSObject;
	var wD = document.wrappedJSObject;

	// Optanon
	if ('Optanon' in wW) {
		if (document.cookie.includes('OptanonAlertBoxClosed')) {
			console.log('Optanon cookie already set');
		} else {
			var el = wD.getElementById('optanon-popup-body');
			if (el && el.offsetHeight) {
				console.log('Optanon popup already open');
		} else {
				wW.Optanon.ToggleInfoDisplay();
			}
		}
	} 
}, 2000, 1);

