'use strict';
(function(){ 

    
    /*
    var pageWrapper = document.getElementById('page-wrapper')
    //alert(pageWrapper);
	var showModal = function(event) {
		event.preventDefault();
        var links = pageWrapper.getElementsByTagName('a');
        //alert(links[2]);
        //for (var i = 0; i < links.length; i++) {   
            if (links[0] == 'file:///E:/Kodilla/java-script/module-9-2-modal/index.html#modal-one') {
                alert(links[0])
                //document.querySelector('#modal-overlay').classList.add('show');
            } 
            else if (links[1] == 'file:///E:/Kodilla/java-script/module-9-2-modal/index.html#modal-two') {
                alert(links[1])
                //links[i].classList.add('show');
            } 
            else if (links[2] == 'file:///E:/Kodilla/java-script/module-9-2-modal/index.html#modal-three') {
                alert(links[2])
               // links[i].classList.add('show');
            } 
        //}   
	};  

    */
    // Tu działą href!!!!
    //var x = document.getElementsByClassName("show-modal").href;
    

   //alert(modalLinks[2]);
   /*
   var modalsShowStatus = function(addRem1,addRem2,addRem3) {
        var tests = addRem1;
        document.querySelector('#modal-one').classList.addRem1('show');
        document.querySelector('#modal-two').classList.(addRem2)('show');
        document.querySelector('#modal-three').classList.(addRem3)('show');
   };
   */
   var showModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var target = event.target || event.srcElement;
        console.log(target);
        //console.log(target.getAttribute('href'));
        if ( target == modalLinks[0]) {
            //modalsShowStatus('add','remove','remove');
           document.querySelector('#modal-one').classList.add('show');
           document.querySelector('#modal-two').classList.remove('show');
           document.querySelector('#modal-three').classList.remove('show');
            //event.preventDefault();
         }
         else if ( target == modalLinks[1]) {
            document.querySelector('#modal-two').classList.add('show');
            document.querySelector('#modal-one').classList.remove('show');
            document.querySelector('#modal-three').classList.remove('show');
           // event.preventDefault();
         }
         else if ( target == modalLinks[2]) {
            document.querySelector('#modal-three').classList.add('show');
            document.querySelector('#modal-two').classList.remove('show');
            document.querySelector('#modal-one').classList.remove('show');
           // event.preventDefault();
         }
         
    };    
	
	var modalLinks = document.querySelectorAll('.show-modal');
	for(var i = 0; i < modalLinks.length; i++){        
        modalLinks[i].addEventListener('click', showModal);  
        //alert(modalLinks[i]);      
	}
	
	// Close modal

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Overlay click close
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Overlay stop propagination 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}	
	
	
})(); 