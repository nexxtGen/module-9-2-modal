'use strict';
(function(){ 

    
    /*
  Komentarz mentora: te trzy warunki typu if ( target == modalLinks[0]) { 
      są bardzo nieeleganckie. Bardzo dużo powtórzeń, do tego jak dojdzie nam więcej modali 
      (i linków) to wtedy skrypt się nie zeskaluje odpowiednio.
   */ 
    var modalLinks = document.querySelectorAll('.show-modal');
    var closeButtons = document.querySelectorAll('.modal .close');
    var modals = document.querySelectorAll('.modal');
    console.log(modals);   
    /*
    var selectRestArray = function(arg) {
        var restArray = arg != sux;
        return restArray;
    }
    */
    var targetedModalLinkAction = function(target) {
        for ( var i = 0; i < modalLinks.length; i++) {       
            if ( target == modalLinks[i]) { 
                for (var k = 0; k < modals.length; k++) {
                    modals[k].classList.remove('show');
                }               
            modals[i].classList.add('show');   
            //var val =  != modals[i];    
            //var newArray = modals.slice(i);                
            //var actual = modals[i];
            // var filteredArray = modals.filter(function(i) {                    
            //         return i != actual;
            //    };                
            //var sux = modals[i];
            //var filteredArray = modals.filter(selectRestArray);
            //filteredArray.classList.remove('show');              
            }
        }
    }
    
    var showModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var target = event.target || event.srcElement;        
        console.log(target);
        //alert(target);  
        //console.log('czy to modale? ', modals[0], target); 
        targetedModalLinkAction(target);
        /*
        if ( target == modalLinks[0]) {
            //modalsShowStatus('add','remove','remove');
           document.querySelector('#modal-one').classList.add('show');
           document.querySelector('#modal-two').classList.remove('show');
           document.querySelector('#modal-three').classList.remove('show');
            
         }
         else if ( target == modalLinks[1]) {
            document.querySelector('#modal-two').classList.add('show');
            document.querySelector('#modal-one').classList.remove('show');
            document.querySelector('#modal-three').classList.remove('show');
           
         }
         else if ( target == modalLinks[2]) {
            document.querySelector('#modal-three').classList.add('show');
            document.querySelector('#modal-two').classList.remove('show');
            document.querySelector('#modal-one').classList.remove('show');
           
         }
         */
    };    
	
	
	for(var i = 0; i < modalLinks.length; i++){        
        modalLinks[i].addEventListener('click', showModal);  
           
	}
	
	// Close modal

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Overlay click close
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Overlay stop propagination 
	
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}	
	
	
})(); 