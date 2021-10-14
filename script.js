// Target all necessary elements
// Add eventlisteners to buttons
// Update unaswered questions
// Add event Listeners to the options

const optionsList = document.querySelector('.option_list');
const options = document.querySelectorAll('.option_li');
const nextBtn = document.querySelector('.next_btn');
const answeredQues = document.querySelector('.done-ques');

options.forEach(option => {
    option.addEventListener('click', () =>{
        console.log('works')
        option.classList.add('clicked-options')
        console.log(options.target.value)

    })
});
