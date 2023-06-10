const login_input=document.querySelectorAll(".user-login .form-control");
const btn_login=document.querySelector("#btn_login");

let student_Storage=JSON.parse(localStorage.getItem("students"));


console.log(student_Storage)
function validateAuthStudent(){
    for(i=0;i<login_input.length;i++){
        if(login_input[i].value==""||login_input[i].value==null){
            login_input[i].nextElementSibling.textContent="field is require";
            return;
        }else {
            login_input[i].nextElementSibling.textContent="";
        }
    }
    let students = student_Storage.filter((student) => {
        return student.email == login_input[0].value && student.reg_no == login_input[1].value;
      });
    
      if (!students.length) {
        document.getElementById("mess").textContent="Incorrect Details"
        return;
      } else {
        let reg=students[0].reg_no;
        window.location.assign(`quiz.html?reg_no=${reg}`);
      }
}

btn_login.addEventListener("click",(e)=>{
    e.preventDefault();
    validateAuthStudent();
})