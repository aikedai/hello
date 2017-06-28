$(function(){  
  $('#pie').hide();
  $('#pi').hide(); 
  $('#eve').click(function(){  
    if($('#bar').is(':hidden')){
    	 $('#pi').hide(); 
    	 $('#ba').show(); 
      $('#pie').hide();   
      $('#bar').show();  
      $('#eve').val('Go Back to Inspect the Piechart ');  
    }  
    else{  
    	 $('#ba').hide();
    	 $('#pi').show(); 
      $('#bar').hide(); 
      $('#pie').show(); 
      $('#eve').val('Go Back to Inspect the Barchart ');  
    }  
  })  
})  