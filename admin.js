

		$(document).ready(function(){

		$("#header").html($("#header").html()+username);
		   $("#adduser").click(function(){
		   	$('#content').load('createuser.html');
		   }); 
		   
 
		   $("#record").click(function(){
		   	$('#content').load('recordprogress.html');
		   });
		   
		    $("#admin").click(function(){
		   	$('#content').html('<h4>Welecom In Your Car Tracking APP</h4>');
		   });
		   
		   	$("#logout").click(function(){
		   	window.location.href = "index.html";
		   });
		 });
