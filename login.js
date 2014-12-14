var username;
$(document).ready(function(){

	$("#login").click(function(){
		 username = $("#username").val();
		var password = $("#password").val();
		// Checking for blank fields.
		if( username =='' || password ==''){
		$('input[type="text"],input[type="password"]').css("border","2px solid red");
		$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
		alert("Please fill all fields...!!!!!!");
		}else {
			$.post("http://therocker.0fees.us/login.php",{ username: username, password:password},
			function(data) {
				if(data=='no'){	
					$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
				} else if(data=='admin'){
					$("form")[0].reset();
					$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
					$('#container-main').load('admin.html');
				} else if(data=='yes'){
					$("form")[0].reset();
					$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
					$('#container-main').load('normal.html');
				}
			});
		}
	});
	
	  $( "#loginform" ).submit(function( event ) {
		  event.preventDefault();
		  $("#login").click();
	  });
	
});

