const questions=document.querySelector("#quest");
const ans_opt=Array.from(document.querySelectorAll(".opt"));
const count=document.querySelector("#count");
const dis_score=document.querySelector("#score");
const student_detail=document.querySelector("#studentDetails");
const countdown=document.querySelector("#countdown");

const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");
const res_n= document.querySelector("#res_n");
const res_s= document.querySelector("#res_s");




let student_Storage=JSON.parse(localStorage.getItem("students"));
let current_question={};
let accepting_answer=false;
let score=0;
let question_index=0;
let available_question=[];
let time=2;
let time_minutes=time*60*60;
let quiz_time=time_minutes/60;

let list_questions=[];

const max_question=10;


function loginUser () {
    let url = window.location.search;
    let url_parameter = new URLSearchParams(url);
    let student = url_parameter.get("reg_no");
    let filtered_student=student_Storage.filter(info => info.reg_no==student);
    let output = ""
    output= `
            <div>School: ${filtered_student[0].school}</div>
            <div>Name: ${filtered_student[0].name.firstname} ${filtered_student[0].name.lastname}</div>
            <div>Reg. No.: ${filtered_student[0].reg_no}</div>
            `
            student_detail.innerHTML=output;

            res_n.textContent=`Congratulation ${filtered_student[0].name.firstname}`
  };


    let quiz_timer=setInterval(()=>{
        if(quiz_time <= 0){
            clearInterval(quiz_timer);
            accepting_answer=false;
            showResult();
        }else {
            quiz_time--;
            let sec=Math.floor(quiz_time%60);
            let min=Math.floor(quiz_time/60)%60;
            countdown.textContent=`TIME: ${min} : ${sec}`
        }
    },1000)

function startQuiz(){
    let ques_storage=localStorage.getItem("questions");
    if(ques_storage!=null){
     list_questions=JSON.parse(ques_storage);
    }
    available_question=[...list_questions];
    nextQuestion();
}

function nextQuestion(){
    if(question_index>=max_question || quiz_time <=0){
      return showResult();
    }
    question_index++;
    count.textContent=`Question ${question_index} of ${max_question}`
    const index=Math.floor(Math.random()*available_question.length);
    current_question=available_question[index];
    questions.textContent=`${current_question.question}?`;

    ans_opt.forEach(option=>{
        const number=option.dataset["number"];
        option.textContent=current_question[`option${number}`];
    })

    available_question.splice(index,1);
    accepting_answer=true;
}

function showResult(){
    clearInterval(quiz_timer);
    res_s.textContent=`You Scored ${score} / ${max_question}`
    modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

ans_opt.forEach(option=>{
    option.addEventListener("click",(e)=>{
       if(!accepting_answer)return;

       accepting_answer=false;
       const selected_opt=e.target;
       const selected_ans=selected_opt.textContent;
       if (selected_ans===current_question.answer) score++;
       dis_score.textContent=`Score(${score})`;
       nextQuestion();
    })
})
window.onload = function() {
    loginUser();
    startQuiz()
  };