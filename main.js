const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const question = $('.question');

const a_text = $('.a_text');
const b_text = $('.b_text');
const c_text = $('.c_text');
const d_text = $('.d_text');

const submitBtn = $('.js-submit');

const JSquiz = $('.js-quiz');

const answerEls = $$('.answer');

let currentQuizIndex = 0;

let score = 0;

var listQuiz = [
    {
        question: 'How old are you?',
        a: '18',
        b: '19',
        c: '20',
        d: '21',
        correct: 'c',
    },

    {
        question: 'Nếu: 11 + 11 = 4, 12 + 12 = 6, 13 + 13 = 8 thì 14 + 14 = ?',
        a: '10',
        b: '14',
        c: '28',
        d: '12',
        correct: 'a',
    },

    {
        question: 'Tìm quy luật của dãy số: 1, 2, 4, 6, 10, 12, 14, 16, 18, 22, .... Hỏi số tiếp theo bằng bao nhiêu?',
        a: '23',
        b: '28',
        c: '24',
        d: '29',
        correct: 'b',
    },

    {
        question: 'Tìm quy luật của dãy số: 2, 3, 5, 9, 17, 33, .... Hỏi số tiếp theo bằng bao nhiêu?',
        a: '40',
        b: '45',
        c: '55',
        d: '50',
        correct: 'c',
    },

    {
        question: 'Tìm quy luật của dãy số: 1, 8, 4, 27, 9, .... Hỏi số tiếp theo bằng bao nhiêu?',
        a: '3',
        b: '18',
        c: '36',
        d: '64',
        correct: 'd',
    },

    {
        question: '1 + 1 = ?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b',
    },
];


function loadQuiz() {

    deSelected();

    const listQuizData = listQuiz[currentQuizIndex];

    question.innerHTML = listQuizData.question;

    a_text.innerHTML = listQuizData.a;    // Trả tham chiếu đến listQuiz a,b,c,d chủa listquiz
    b_text.innerHTML = listQuizData.b;
    c_text.innerHTML = listQuizData.c;
    d_text.innerHTML = listQuizData.d;
}

function getSelected() {
    let answerChecked = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerChecked = answerEl.id;
        }
    });
    return answerChecked;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const listQuizlength = listQuiz.length;

    const answered = getSelected();

    if (answered) {

        if (answered === listQuiz[currentQuizIndex].correct) {
            score++;
        }

        currentQuizIndex++;

        if (currentQuizIndex < listQuizlength) {
            loadQuiz();
        }
        else {

            if (score <= ((listQuizlength / 2) + 2)) {
                JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You have IQ <= 120</h2>
                                   <button class="submit" onclick="location.reload();">Reload</button>`;
                // } else if (score = ((listQuizlength / 2) + 2)) {
                //     JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You have IQ = 120</h2>
                //                       <button class="submit" onclick="location.reload();">Reload</button>`;

            }
            // if (score = ((listQuizlength / 2) + 2)) {
            //     JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You have IQ = 120</h2>
            //                       <button class="submit" onclick="location.reload();">Reload</button>`;
            // }

            if (score > ((listQuizlength / 2) + 2)) {
                JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You have IQ > 120</h2>
                                  <button class="submit" onclick="location.reload();">Reload</button>`;
            }

            // switch (score) {
            //     case 1:
            //     case 2:
            //     case 3:
            //         JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You failed</h2>
            //         <button class="submit" onclick="location.reload();">Reload</button>`;
            //         break;
            //     case 4:
            //     case 5:
            //     case 6:
            //         JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You Success</h2>
            //                 <button class="submit" onclick="location.reload();">Reload</button>`;
            //         break;
            //     default:
            //         JSquiz.innerHTML = `<h2 class="question">You finished quiz</h2>
            //                 <button class="submit" onclick="location.reload();">Reload</button>`;
            //         break;
            // }

            // JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. You failed</h2>
            // <button class="submit" onclick="location.reload();">Reload</button>`;     
        }
    }

});

loadQuiz();


// Time

// const hoursEl = $('.hours');
// const mintuesEl = $('.mintues');
// const secondesEl = $('.secondes');
// var newtimeMinutes = new Date('05:00');
// var oldtimeMinutes = new Date('00:00');
// var totalTime = newtimeMinutes - oldtimeMinutes;
// console.log(totalTime);

// function loadTime() {

// }


