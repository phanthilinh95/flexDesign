
 $(document).ready(function(){
 	var self = this;
 	var flag = 0 ;
    $('.show-menu-child-1st').click( function(){
    	$('.dimmer').css('display', 'block');
   
     	$('.menu-hidden').toggle().css('display', 'block');
     	$('body').css('overflow', 'hidden');
     	$('.purpose-list-child').css('display', 'none'); 
    });
    $('.purpose-menu').click( function(){
    		
    		if(flag % 2 == 0 ){
    			$('.purpose-list-child').css('display', 'block');
				console.log('áddd');
				console.log(flag++);
				
    		} else {
    			$('.purpose-list-child').css('display', 'none');
    			console.log('zo');
    				console.log(flag++);
    		}
    	

    	});
    		
    

    $(document).mouseup(function(e){
    	var container = $(".menu-hidden");
    	if (!container.is(e.target) && container.has(e.target).length === 0){
        	container.hide();
        	$(".dimmer").css('display', 'none');
        	$('body').css('overflow', 'initial');
    	}
		});
  });
