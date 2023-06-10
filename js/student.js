let student_reg_details=document.querySelectorAll(".student-registration .form-control");
let login_details=document.querySelectorAll(".user-login .form-control");
let student_btn=document.querySelector("#student_submit");
let schooldropDown=document.querySelector("#schooldropDown");

// array
let student_list=[];
let sch_data=[];
let student_Storage = localStorage.getItem("students");

// class
class Student{
    constructor(fname,lname,sch,reg,age,gender,phone,email){
        this.name={
            firstname:fname,
            lastname:lname,
        };
        this.school=sch;
        this.reg_no=reg;
        this.age=age;
        this.gender=gender;
        this.phone=phone;
        this.email=email;
    }
}
// functions
function populateSchoolDrop(){
    let sch_Storage=localStorage.getItem("schools");
    if(sch_Storage!=null){
     sch_data=JSON.parse(sch_Storage);
    }
    let drop_options=sch_data.map(key => key.schoolname);
    schooldropDown.innerHTML="";
    drop_options.forEach(item=>{
        let options=document.createElement("option");
        options.textContent=item;
        schooldropDown.appendChild(options);
    })
}
function validateStudentInput(){
    for (let i=0; i<student_reg_details.length; i++){
        if(student_reg_details[i].value=="" || student_reg_details[i].value==null){
            student_reg_details[i].nextElementSibling.textContent="field is required";
            return
        }else {
            student_reg_details[i].nextElementSibling.textContent="";
        }
    }
    createStudent();
}
function createStudent(){
    let current_date=new Date();
    let current_year=current_date.getFullYear();
    let dob_date=new Date(student_reg_details[4].value);
    let dob_year=dob_date.getFullYear();
    let age=current_year - dob_year;

    let new_student=new Student(
        student_reg_details[0].value,
        student_reg_details[1].value,
        student_reg_details[2].value,
        student_reg_details[3].value,
        age,
        student_reg_details[5].value,
        student_reg_details[6].value,
        student_reg_details[7].value
        )
        if (student_Storage) {
            student_list = JSON.parse(localStorage.getItem("students"));
          }
    student_list.push(new_student);
    localStorage.setItem("students",JSON.stringify(student_list));
    alert(`${student_reg_details[0].value} is Successfully Registered`)
    student_reg_details[0].value="";
    student_reg_details[1].value="";
    student_reg_details[2].value="";
    student_reg_details[3].value="";
    student_reg_details[4].value="";
    student_reg_details[5].value="";
    student_reg_details[6].value="";
    student_reg_details[7].value="";
}


// eventlisteners & onloads
student_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    validateStudentInput();
})
window.onload = function() {
    populateSchoolDrop();
  };