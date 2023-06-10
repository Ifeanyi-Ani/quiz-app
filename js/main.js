let late_reg=document.querySelectorAll(".late_reg");
let reg_ctd=document.querySelector("#reg_ctd");
let startNow=document.querySelector("#startNow");
let start_quiz=document.querySelector("#start_quiz");
/* Set countdown date as a future date with a 24 hour format */
// let countdownDate = new Date('16 November 2022 00:00')

/* Set countdown date by adding hours to current date */
// let countdownDate = new Date().setHours(new Date().getHours() + 3)

/* Set countdown date by adding minutes to current date */
let countdownDate = new Date().setMinutes(new Date().getMinutes() + 1);

/* Set countdown date by adding seconds to current date */
// let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10);

let timerInterval;


const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference <=0) {
    late_reg.forEach(item=>{
        item.addEventListener("click",()=>{
            item.href="payment.html"
        })
    })
    return endCountdown();
  }

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  reg_ctd.innerHTML=`Remaing <br>${formatTime(days, "day")} : ${formatTime(hours, "hr")} : ${formatTime(minutes, "min")} :${formatTime(seconds, "")}`
};

const endCountdown = () => {
  clearInterval(timerInterval);
};

let startInterval;
let re_initiate;

const startTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};


// let quizdownDate = new Date().setHours(new Date().getHours() + 4);
let quizdownDate = new Date().setMinutes(new Date().getMinutes() + 2);

const startQuizCount = () => {
    clearInterval(re_initiate);
  const now = new Date().getTime();
  const countdown = new Date(quizdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference <= 0) {
    startNow.classList.remove("disabled");
   return endQuizCount();
  }

//   let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  start_quiz.innerHTML=`QUIZ will start in the next: <span class="my-bg-primary my-txt-primary p-2">${startTime(hours, "hr")} : ${startTime(minutes, "min")} :${startTime(seconds, "")}</span>`
};

const endQuizCount = () => {
  clearInterval(startInterval);
  re_initiate=setInterval(()=>{
    startNow.classList.add("disabled");
    quizdownDate = new Date().setMinutes(new Date().getMinutes() + 1)
    startInterval = setInterval(startQuizCount, 1000);
    startQuizCount();
  }, 60000)
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
  startQuizCount();
  startInterval = setInterval(startQuizCount, 1000);
});