// When user clicks on Popup Window Close (X) Button, Popup Window closes and User view is back to the main screen 

const closeButton = document.getElementById('close');

closeButton.addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none'; 
})

// When user inputs e-mail address, alert 'successfull signup' message
const popupForm = document.getElementById('subscription');

popupForm.addEventListener('submit', function() {
    alert ("Thank you for signing up to our newsletter! Vibes coming your way.")
})

