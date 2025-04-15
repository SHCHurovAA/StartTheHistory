const modal = document.querySelector('#modal');
const modalCloseButton = modal.querySelector('button');


/* 
    ФУНКЦИИ
*/
function openModal() {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}


/* 
    ВАРИАНТЫ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА
*/

// Закрываем модальное окно по клику по кнопке закрытия
modalCloseButton.addEventListener('click', closeModal);

// Закрываем модальное окно по области оверлея
modal.addEventListener('click', closeModal);

// Закрываем модальное окно по нажатию клавиши Escape
document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        closeModal();
    }
});

// Запрещаем закрывать модальное окно из основной области модального окна
modal.childNodes.forEach((child) => {
    child.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


