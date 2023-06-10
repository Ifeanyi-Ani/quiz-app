const create_ques=document.querySelector("#create_ques");
const ques_card=document.querySelector(".ques_card");
const get_data=document.querySelector("#get_data");
const get_data_input=document.querySelectorAll(".get-question-data input");
const closes=document.querySelector("#close");
const submit_ques=document.querySelector("#addProBtn");

let ques_list=[];
let ques_storage=localStorage.getItem("questions");
class Question{
    constructor(question,option1,option2,option3,option4,answer){
        this.question=question;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.answer=answer;
    }
}
displayQuestion();

function validateForm(){
    for (let i=0; i<get_data_input.length; i++){
        if (get_data_input[i].value==""||get_data_input[i].value==null){
            get_data_input[i].nextElementSibling.textContent="Field is required"
            return;
        }else {
            get_data_input[i].nextElementSibling.textContent="";
        }  
    }
    createQuest();
}

function createQuest(){
    let ques_data=new Question(
        get_data_input[0].value,
        get_data_input[1].value,
        get_data_input[2].value,
        get_data_input[3].value,
        get_data_input[4].value,
        get_data_input[5].value
        );
    if(ques_storage){
        ques_list=JSON.parse(localStorage.getItem("questions"));
    }
    ques_list.push(ques_data);
    localStorage.setItem("questions",JSON.stringify(ques_list));
        get_data_input[0].value="";
        get_data_input[1].value="";
        get_data_input[2].value="";
        get_data_input[3].value="";
        get_data_input[4].value="";
        get_data_input[5].value="";
    displayQuestion;
    get_data.classList.remove("show");
}
function deleteQuestion(){
    alert("");
    let i = this.attr("idx");
    console.log(i);
}
function displayQuestion(){
    if(ques_storage!=null){
        ques_list=JSON.parse(ques_storage);
    }
    let output="";
    for (i in ques_list){
        output +=`
        <div class="school-card">
            <div class="details">
            <div class="name"><span>${ques_list[i].question}</span></div>
            <div>Option: ${ques_list[i].option1}</div>
            <div>Option: ${ques_list[i].option2}</div>
            <div>Option: ${ques_list[i].option3}</div>
            <div>Option: ${ques_list[i].option4}</div>
            <div>Answer: ${ques_list[i].answer}</div>
            </div>
        </div>
        `
    }
    ques_card.innerHTML=output;
 
}
create_ques.addEventListener("click",function(){
    get_data.classList.add("show");
})
closes.addEventListener("click", function(){
    get_data.classList.remove("show");
})
submit_ques.addEventListener("click",function(e){
    e.preventDefault();
    validateForm();
})
ques_card.addEventListener("click",  deleteQuestion)
