export default function() {
    // Diagnostic types
    const tabs = document.querySelectorAll('.diagnostic-tab');
    const navItems = document.querySelectorAll('.diagnostic-nav-item');
    navItems && navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            const index = Array.from(navItems).indexOf(navItem);
            navItems.forEach(item => item.classList.remove('active'));
            navItem.classList.add('active');
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[index].classList.add('active');
            tabs[index].scrollLeft = 0;
        })
    })

    // Diagnostic how toggler
    const toggler = document.querySelector('.diagnostic-how__toggler');
    const text = document.querySelector('.diagnostic-how__list');
    if (toggler && text) {
        text.style.maxHeight = text.scrollHeight + "px";
        toggler.addEventListener('click', () => {
            toggler.classList.toggle('active');
            text.classList.toggle('hidden');
            if (text.classList.contains('hidden')) {
                text.style.maxHeight = '370px';
            } else {
                text.style.maxHeight = text.scrollHeight + "px";
            }
        })
    }

    // Diagnostic quiz
    const quiz = document.querySelector('.quiz');
    if (quiz) {
        const quizSteps = quiz.querySelectorAll('.quiz__step');
        const quizBtns = quiz.querySelectorAll('.quiz__btn');
        const quizNextBtns = quiz.querySelectorAll('[data-step="next"]');
        const quizOptions = quiz.querySelectorAll('.quiz-option__radio');
        const quizToStart = quiz.querySelector('.quiz__to-start');
        let currentStep = 0;

        quizOptions.forEach(option => {
            option.oninput = (e) => {
                let step = option.closest('.quiz__step');
                let nextBtn = step.querySelector('[data-step="next"]');
                nextBtn.disabled = false;
            }
        });

        quizBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                let direction = btn.getAttribute('data-step');
                let nextStep = (direction == 'prev') ? currentStep - 1 :
                               (direction == 'next') ? currentStep + 1 :
                               false;
                if (quizSteps[nextStep]) {
                    quizSteps[currentStep].classList.remove('active');
                    quizSteps[nextStep].classList.add('active');
                    currentStep = nextStep;
                }
            }
        });

        quizToStart.onclick = (e) => {
            e.preventDefault();
            quiz.reset();
            quizNextBtns.forEach(btn => {btn.disabled = true});
            quizSteps[currentStep].classList.remove('active');
            quizSteps[0].classList.add('active');
            currentStep = 0;
        }
    }
}
