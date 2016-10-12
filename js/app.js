$(document).ready(function() {
	$("#office-link").click(function() {
		$("#main-section").hide();
		$("#office-section").show();
	});

	$("#office-main-link").click(function() {
		$("#main-section").show();
		$("#office-section").hide();
	});

	$("#basement-link").click(function() {
		$("#main-section").hide();
		$("#basement-section").show();
	});

	$("#basement-main-link").click(function() {
		$("#main-section").show();
		$("#basement-section").hide();
	});

	$("#frontroom-link").click(function() {
		$("#main-section").hide();
		$("#frontroom-section").show();
	});
});