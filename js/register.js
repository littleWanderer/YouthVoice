$(document).ready(function(){

	$('#register_link').click(function(e){

		e.preventDefault();
        e.stopPropagation();

		$('#login_form').css('display', 'none');
		$('#register_form').css('display', 'block');
		$('#register_link').css('display', 'none');


	})



})