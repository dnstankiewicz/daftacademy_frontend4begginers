/*
######################################
HAMBURGER MENU
######################################
*/

const hamburgerMenu = document.querySelector('.hamburgerMenuIcon');
const navigationPanel = document.querySelector('.page-navigation');
const navigationLinks = document.querySelectorAll('.page-navigation__item');


const toggleHamburgerMenu = () => {
    hamburgerMenu.classList.toggle('hamburgerMenuIcon--active');
    navigationPanel.classList.toggle('page-navigation--active');
};

hamburgerMenu.addEventListener('click', toggleHamburgerMenu);
navigationLinks.forEach(
    navigationSingleLink => {
        navigationSingleLink.addEventListener('click',toggleHamburgerMenu);
    }
);


/*
######################################
ZMIANA PRZYCISKU
######################################
*/

const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if(e.target.classList.contains('concerts__button')){
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = "Have fun!";

        // const buttonContainer = buyTicketButton.parentElement;
        // buttonContainer.insertBefore(haveFunText,buyTicketButton);
        // buyTicketButton.remove();

        buyTicketButton.replaceWith(haveFunText);
    }
});

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
