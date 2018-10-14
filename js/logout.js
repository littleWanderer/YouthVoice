/* LOGOUT */

$(document).ready(function(){


	const URLlogin="http://127.0.0.1:9006/api/logout";

	$("#logout").click(function(e){

		e.preventDefault();
        e.stopPropagation();

			  	
		var token = sessionStorage.getItem('token');
		console.log(token);

		$.ajax({
			  
			  type: "GET",
			  url: URLlogin,
			  beforeSend: function (xhr) {
				    xhr.setRequestHeader('Authorization', 'Bearer '+token);
			  },
			  success: function(data){ 

			  	sessionStorage.getItem('token');
			  	//destroy the token
			  	console.log(data.token);

	  			window.location.href = "index.html";
			  		
			  },
			  error: function(){
			  	alert('Error while logging out!');
			  }



		});



	});




})