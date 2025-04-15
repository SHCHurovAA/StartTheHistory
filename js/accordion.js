const accordionTopics = document.querySelectorAll('.accordion__element');

accordionTopics.forEach(function (accordionTopic) {

    accordionTopic.addEventListener('click', function (event) {
        const clickForHeaderBtn = event.target.closest('.accordion__head')

        if (clickForHeaderBtn) {
            const topicIsOpened = accordionTopic.classList.toggle('accordion__element--open');
            const content = accordionTopic.querySelector('.accordion__body');

            if (topicIsOpened) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        }
    })
});
