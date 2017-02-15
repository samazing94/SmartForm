// Your jQuery goes here

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
		$("#start").click(function(event) {
			$("#q1").show();
			$(this).hide();
			$("#welcome").hide();
		});
		function validateName(name)
			{
				var re = /^[A-z ]+$/;	// 15:04
				return re.test(name);
			}

			function validateEmail(email)
			{
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		$('#qNext').click(function(event) {
			var name = $('#name').val();
			var email = $('#exampleInputEmail1').val();

			if (name.length == 0) {
				$('#head').text("* All fields are mandatory *");
				$('#name').focus();
				return false;
			}

			else if(!validateName(name) || name.length == 0) {
				alert("* Please use alphabets only *");
				$('#name').focus();
				$("#qNext").prop('disabled');
				return false;
			}
			else if(!validateEmail(email) || email.length == 0) {
			alert("* Please enter a valid email address *");
				$('#exampleInputEmail1').focus();
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

					userData.name = $("#name").val();
					userData.email = $("#exampleInputEmail1").val();
					console.log(JSON.stringify(userData));
					$("#q1").hide();
					$("#q2").show();
				$("#qNext").prop('enabled');
				return true;
			}
		});
	});
var positionArray = [];
//must use this kind of code to check if all buttons are enabled or not
//$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');

$("#exampleInputEmail1").on("change keyup", function(){
	console.log($(this).val());
	$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
});
$("#name").on("change", function(){
	console.log($(this).val());
	$("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
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

$("#q2a").click(function() {
//	var htmlChecked = [];
	$(':checkbox[name=likesHTML]').click(function() {
				if (this.checked) {
						userData.html.push(this.value);
				//userData.html = push(htmlChecked);
				console.log(JSON.stringify(userData));
				localStorage.userData;
				}
    });
		if (userData.html || userData.htmlSkill) {
			$("#htmlNext").click(function() {
				$("#q2a").hide();
				$("#q2").show();
				$("html").attr('disabled', 'block');
			});
			$("#htmlPrev").click(function() {
				$("#q2a").hide();
				$("#q2").show();
			});

		}
});
