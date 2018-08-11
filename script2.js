'use strict';
(function(){ 
    
    
	var showModal = function(event) {
		event.preventDefault();
        var links = document.getElementsByTagName('a'); 
        alert(links[0]);
        if ()
        
	};
	
	
    var modalLinks = document.querySelectorAll('.show-modal');
    alert(modalLinks[1]);
	
	for(var i = 0; i < modalLinks.length; i++){        
        modalLinks[i].addEventListener('click', showModal);
        
	}
	
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	/* I to wszystko - mamy już działający modal! 
	
	ĆWICZENIE: 
	Zmień funkcję showModal tak, aby w momencie wyświetlania była zmieniana treść nagłówka na dowolną inną, np. "Modal header". 
	*/
	
})(); 