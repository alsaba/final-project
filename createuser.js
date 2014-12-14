 $(document).ready(function(){
 $("#expected").numeric();

	$("#login").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		var expected = $("#expected").val();
		// Checking for blank fields.
		if( username =='' || password =='' || expected==''){
		$('input[type="text"],input[type="password"]').css("border","2px solid red");
		$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
		alert("Please fill all fields...!!!!!!");
		}else {
			$.post("http://therocker.0fees.us/createuser.php",{ username: username, password:password , expected:expected},
			function(data) {
				if(data=='false'){	
					$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
					$('#message').html("<p>UserName is already exit.</p>");
				} else if(data=='true'){
					$("form")[0].reset();
					$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
					$('#message').html("<p>Done, Add another user.</p>");
					//$('#container').load('admin.html');
				} else
				{$('#message').html("<p>Error connecting server</p>");}				
			});
		}
		
		
	});
	
	
	$( "#createuserform" ).submit(function( event ) {
		  event.preventDefault();
		  $("#login").click();
	  });
});