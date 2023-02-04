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

// When Home page is reloaded - Generate pre-set background colours in header which will change automatically 
let i = 0;
let colors = ['#b9dde7', '#f38d8d', '#68b0c1', '#227284'] ;

function changeColor () {
    const background = document.getElementById('home');
    background.style.backgroundColor = colors[i];
    i = i + 1;
    if (i > 3) {
        i = 0;
    }
    interval ();
}

function interval () {
    return setTimeout(changeColor, 2000);
}

interval();