/* LOGIN */

$(document).ready(function(){


	const URLlogin="http://127.0.0.1:9006/api/login";

	$("#login_form").submit(function(e){

		e.preventDefault();
        e.stopPropagation();

        window.location.href = "problems.html";
        /*
		var user=$('#username').val().trim();
		var pass=$('#password').val().trim();

		
		var jsonData = {};
		jsonData["username"]=user;
		jsonData["password"]=pass;
		
		console.log(jsonData);

		$.ajax({
			  headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
    		  },
			  type: "POST",
			  url: URLlogin,
			  dataType: "json",
			  data: JSON.stringify(eval(jsonData)),

			  success: function(resp){ //mora se vratiti generisani kljuc

			  	var form=document.getElementById('login_form');
			  	form.reset();


			  	

	  			
			  		
			  },
			  error: function(){
			  	alert('Greška prilikom logovanja na sistem!');
			  }

			  

		});*/



	});




})