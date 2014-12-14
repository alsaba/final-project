    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
	var base64value;
	var lastlevel;

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
	  base64value=imageData;
    }
    
	// Called when a photo is successfully retrieved
    //
    function onPhotoFileSuccess(imageData) {
      // Get image handle
      console.log(JSON.stringify(imageData));
      
   	  // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhotoWithData() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
    }

    function capturePhotoWithFile() {
        navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
    }
    
    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

 $(document).ready(function(){
 			$.post("http://therocker.0fees.us/getusers.php",{},
			function(data) {
				data = JSON.parse(data);
				$(data).each(function()
				 {
					 var option = $('<option />');
					 option.attr('value', this.userName).text(this.userName);
					 $('#selectusername').append(option);
				 });
			});
			


			
$(function(){
    $(".percent").mask("9?9%");
    
    $(".percent").on("blur", function() {
        var value = ($(this).val().length == 1) ? $(this).val() + '%' : $(this).val();
        $(this).val( value );
    });
});

 $("#selectusername").on("change", function() {
  			$.post("http://therocker.0fees.us/getlastlevel.php",{username: $("#selectusername").val()},
			function(data) {
				$("#porgreslevel").val(data+"%");
				lastlevel =data;
			});
    });

	$("#login").click(function(){
		var username = $("#selectusername").val();
		var porgreslevel = $("#porgreslevel").val();
		porgreslevel = porgreslevel.substring(0, porgreslevel.length - 1);
		
		var description = $("#description").val();
		// Checking for blank fields.
		if( username =='' || porgreslevel ==''){
		$("#selectusername","#porgreslevel").css("border","2px solid red");
		$("#selectusername","#porgreslevel").css("box-shadow","0 0 3px red");
		alert("Please fill User name and progress level!");
		}else {
			$.post("http://therocker.0fees.us/createprogress.php",{ username: username,porgreslevel:porgreslevel, description:description,imagebase64:base64value},
			function(data) {
				if(data=='false'){	
					$('input[type="text"],select').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
					$('#message').html("<p>Some Error happened.</p>");
				} else if(data=='true'){
					$("form")[0].reset();
					$('input[type="text"],select').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
					$('#message').html("<p>Done, Add record.</p>");
				} else
				{$('#message').html("<p>Error connecting server</p>");}					});
		}
		
		
	});
	
	
	$( "#createuserform" ).submit(function( event ) {
		  event.preventDefault();
		  $("#login").click();
	  });
	  
	  
});