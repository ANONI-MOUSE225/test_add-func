//ハンバーガーメニュー
function hambuger(){}

document.getElementById("humburger-contents").classList.toggle("")


//モーダル 
let btn = document.getElementById("btn");
let modal = document.getElementById("modal");

btn.addEventListener('click', function () {
    modal.style.display = "block";
})

let submitBtn = document.getElementById("submit-btn");
let modalComp = document.getElementById("modal-complete");

submitBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalComp.style.display = "block";
})

let backBtn = document.getElementById("back-btn");
let backBtn2 = document.getElementById("back-btn2");

backBtn.addEventListener("click", function () {
    modal.style.display = "none";
})

backBtn2.addEventListener("click", function () {
    modalComp.style.display = "none";
})

let closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", function () {
    modalComp.style.display = "none";
})

//アコーディオン
document.addEventListener("DOMContentLoaded",() => {
    const question = document.querySelectorAll('.js-question');
    const answer = document.querySelectorAll('.answer');

    for (let i = 0; i < question.length; i++){
        let questionEach = question[i];
        let answerEach = answer[i];
        questionEach.addEventListener('click', () => {
            questionEach.classList.toggle('is-active');
            answerEach.classList.toggle('is-open');
        });
    }
});




  
  
  