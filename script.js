// When user clicks on Popup Window Close (X) Button, Popup Window closes and User view is back to the main screen 

const closeButton = document.getElementById('close');

closeButton.addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none'; 
})

