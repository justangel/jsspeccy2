function JSSpeccy(container) {
	if (typeof(container) === 'string') {
		container = document.getElementById(container);
	}
	var ui = JSSpeccy.UI({
		container: container
	});
	
	var keyboard = JSSpeccy.Keyboard();
	
	var spectrum = JSSpeccy.Spectrum({
		ui: ui,
		keyboard: keyboard,
		model: JSSpeccy.Spectrum.MODEL_128K
	})
	
	function tick() {
		spectrum.runFrame();
		setTimeout(tick, 20);
	}
	
	tick();
}
