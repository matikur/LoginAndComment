$(document).ready(function(){
	$("#btn_com").click(function(){
	var a = $("#comnt_box").val();
	
	$("#comment").append("<h4>" + a + "</h4>");
	})
})





$(document).ready(function(){
	$("#btn_login").click(function(){
	var b = $("#name").val();
	var c = $("#password").val();
	
	if (b == "atikur" && c == "atik007") {
		$("#login_msg").text("LOGIN SUCCESSFUL !");
	}else{
		$("#login_msg").text("Wrong Username or Password." );
	}
	})
})
