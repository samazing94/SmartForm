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
//validations
	$(document).ready(function() {
		$('#qNext').click(function(e) {
			var name = $('#name').val();
			var email = $('#exampleInputEmail1');
			
			var nameRegex = /^[a-zA-Z]+$/;
			var emailRegex =  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if (name.length == 0) {
				$('#head').text("* All fields are mandatory *");
				$('#name').focus();
				return false;
			}
			else if(!name.test(nameRegex) || name.length == 0) {
				$('#head').text("* Please use alphabets only *");
				$('#name').focus();
				$("#qNext").prop('disabled');
				return false;
			}
			else if(!email.test(nameRegex) || email.length == 0) {
				$('#head').text("* Please enter a valid email address *");
				$('#name').focus();
				$("#qNext").prop('disabled');
				return false;
			}
			else {
	/*				$("#exampleInputEmail1").on("change keyup", function(){
					console.log($(this).val());
					$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
				});

				$("#name").on("change", function(){
					console.log($(this).val());
					$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
				}); */
				return true;
			}
		});
	});
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
