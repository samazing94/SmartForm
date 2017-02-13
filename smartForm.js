// Your jQuery goes here

$("#start").click(function(event) {
	$("#q1").show();
	$(this).hide();
	$("#welcome").hide();
});
var userData = {
	name: '',
	email: '',
	html: [],
	css: [],
	js: [],
	htmlSkill: null,
	cssSkill: null,
	jsSkill: null,
	position: "welcome"
};

var positionArray = [];
//must use this kind of code to check if all buttons are enabled or not
$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');

$("#exampleInputEmail1").on("change keyup", function(){
	console.log($(this).val());
	$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
});
$("#name").on("change", function(){
	console.log($(this).val());
	$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
});

$("#qNext").click(function() {
	userData.name = $("#name").val();
	userData.email = $("#exampleInputEmail1").val();
	console.log(JSON.stringify(userData));
	$("#q1").hide();
	$("#q2").show();
});

$("#html").click(function() {
	$("#q2").hide();
	$("#q2a").show();
});
$("#css").click(function() {
	$("#q2").hide();
	$("#q2b").show();
});
$("#js").click(function() {
	$("#q2").hide();
	$("#q2c").show();
});
