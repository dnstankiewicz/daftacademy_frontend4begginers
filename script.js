/*
######################################
HAMBURGER MENU
######################################
*/

const hamburgerMenu = document.querySelector('.hamburger');
const navigationPanel = document.querySelector('.page-navigation');
const navigationLinks = document.querySelectorAll('.page-navigation__item');


const toggleHamburgerMenu = () => {
    navigationPanel.classList.toggle('page-navigation--active');
};

hamburgerMenu.addEventListener('click', toggleHamburgerMenu);
navigationLinks.forEach(
    navigationSingleLink => {
        navigationSingleLink.addEventListener('click',toggleHamburgerMenu);
    }
)


/*
######################################
ZMIANA PRZYCISKU
######################################
*/

const ticketAllButtons = document.querySelectorAll('.concerts__button');

ticketAllButtons.forEach(
        ticketSingleButton => {
            ticketSingleButton.addEventListener('click', () => {
                ticketSingleButton.style.pointerEvents = 'none';
                ticketSingleButton.style.border = 'none';
                ticketSingleButton.style.backgroundColor = 'transparent';
                ticketSingleButton.textContent = 'Have fun!';        
            })
        }
);


/*
######################################
FORMULARZ DO KONSOLI
######################################
*/

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (Event) => {

    // zabezpieczenie przed wysłaniem danych i przeladowaniem strony
    Event.preventDefault(); 
    
    //odczyt danych z forma
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    
    // wyzerowanie wartości formularza na stronie
    const formInputValues = document.querySelectorAll('.form__input');
    formInputValues[0].value= null;
    formInputValues[1].value= null;
});








