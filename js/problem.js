function createProblemCard(data){

    
	var divEl=document.createElement('div');
    divEl.setAttribute('class','cardsForProblems');
    divEl.setAttribute('id','col-12 card_'+data.id);
    divEl.innerHTML=`<div class="card-upper">
                   <h5>${data.name}</h5>
                   <p>${data.description}</p>
                   <div class="col-12">
                       <div class="row author_icon">
                           <a href="#" id="likeBtn"> <i class="far fa-thumbs-up"></i></a> ${data.numOfVotes}
                           <h6>${data.userEntity.username}</h6>
                       </div>
                   </div>
               </div>`;
		   			
			$(divEl).appendTo($('#allProblems'));	
}

$(document).ready(function(){
    $('#add_subject_modal').modal('show');
    
    const URLallProblems="http://127.0.0.1:9006/potentialproblems/returnAll";

		$.ajax({
			  headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
    		  },
			  type: "GET",
			  url: URLallProblems,
			  dataType: "json",
			  success: function(resp){ //mora se vratiti generisani kljuc
                console.log(resp);
		        $.each( resp, function( key, val ) {

                createProblemCard(resp[key]);				

		        }); 
	  			// window.location.href = "home.html";
			  		
			  },
			  error: function(){
			  	alert('Greška prilikom logovanja na sistem!');
			  }



	



	});
});