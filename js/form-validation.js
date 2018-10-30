jQuery(document).ready(function($){

	// hide messages 
	$("#error, #sent-form-msg").hide();
	
	// on submit...
	$("#subscribeForm button.btn-success").click(function(e) {
		//$("#error").hide();
		//$("#sent-form-msg").hide();
		
		//required:
		//email
		var email = $(this).parents("form").find("input").val()
		if(email == ""){
			$("#error").fadeIn().html("Digite seu e-mail.");
			$("input#email").focus();
			return false;
		}

		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			$("#error").fadeIn().html("Digite um e-mail v&aacute;lido.");
			$("input#email").focus();
			return false;

		}
			
		// send mail php
		var sendMailUrl = 'mail.php';
		
		//to, from & subject
		var to = 'flavio.hfs@gmail.com';
		var from = $("#from").val();
		var subject = 'Contato - flaviospedaletti.com.br';
		
		// data string
		var dataString = 'name='+ name
						+ '&email=' + email
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#sent-form-msg").show();	
	 }
	
    return false;
});

