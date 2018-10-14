$(document).ready(function(){
    $('#add_subject_modal').modal('show');
    
    const URLallProblems="http://127.0.0.1:9006/potentialProblems/returnAll";

		e.preventDefault();
        e.stopPropagation();

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


			  	sessionStorage.setItem('token', resp.data.token);
			  	console.log(resp.data.token);

	  			window.location.href = "home.html";
			  		
			  },
			  error: function(){
			  	alert('Greška prilikom logovanja na sistem!');
			  }



	



	});
});