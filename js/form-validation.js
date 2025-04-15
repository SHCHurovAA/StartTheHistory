const serviceOfferForm = document.querySelector("#serviceOfferForm");

const nameInput = serviceOfferForm.querySelector("#name");
const emailInput = serviceOfferForm.querySelector("#email");
const formFields = [nameInput, emailInput];


formFields.forEach((field) => {
    field.addEventListener('input', () => {
        validationField(field);
    });

    field.addEventListener('blur', () => {
        validationField(field);
    });

});

// TO DO: доделать модальное окно при отправке формы
serviceOfferForm.addEventListener('submit', (event) => {
    // Заглушка на время разработки
    event.preventDefault();

    formFields.forEach((field) => {
        field.value = '';

        openModal();
    });

});


function validationField(field) {
    if (field.value.trim() === '') {
        field.parentNode.classList.add('service-offer__inp-group--error');
    } else {
        field.parentNode.classList.remove('service-offer__inp-group--error');
    }
}