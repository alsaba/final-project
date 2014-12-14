  $(document).ready(function(){

			$.post("http://therocker.0fees.us/getprogress.php",{ username: username},
			function(data) {
			
				$('#contents').html(data);			
			});
			
			$("#logout").click(function(){
		   	window.location.href = "index.html";
		   });
		});
	