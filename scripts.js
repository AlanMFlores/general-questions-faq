const questions = document.querySelectorAll('.toggle-questions')
const content = document.querySelector('.answer-content');

questions.forEach((question) => {
    const btn = question.querySelector('.btn')
    btn.addEventListener('click', () => {

        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove('show-answer');
            }
        })

        question.classList.toggle('show-answer')

        // const content = questions.querySelector('.answer-content');
        // content.classList.toggle('show-answer')
    })

})