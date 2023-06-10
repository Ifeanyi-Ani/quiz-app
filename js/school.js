// dom element
let sch_reg_details=document.querySelectorAll(".sch_input");
let sch_submit_btn=document.querySelector("#sch_submit");


// classes
class School{
    constructor(schname,country,street,state,suite,zipcode,tel,mail){
        this.schoolname=schname;
        this.nationality=country;
        this.address={
            state:state,
            street:street,
            suite:suite,
            zipcode:zipcode,
        }
        this.phone=tel;
        this.email=mail;
    }
}

// arrays
let sch_Storage = localStorage.getItem("schools");
let school_list=[];

function validateSchoolInput(){
    for (let i=0; i<sch_reg_details.length; i++){
        if(sch_reg_details[i].value=="" || sch_reg_details[i].value==null){
            sch_reg_details[i].nextElementSibling.textContent="field is required";
            return
        }else {
            sch_reg_details[i].nextElementSibling.textContent="";
        }
    }
    createSchool();
}
function createSchool(){
    let new_sch=new School(
        sch_reg_details[0].value,
        sch_reg_details[1].value,
        sch_reg_details[2].value,
        sch_reg_details[3].value,
        sch_reg_details[4].value,
        sch_reg_details[5].value,
        sch_reg_details[6].value,
        sch_reg_details[7].value
        )
        if (sch_Storage) {
            school_list = JSON.parse(localStorage.getItem("schools"));
          }
        school_list.push(new_sch);
        localStorage.setItem("schools",JSON.stringify(school_list));
    sch_reg_details[0].value="";
    sch_reg_details[1].value="";
    sch_reg_details[2].value="";
    sch_reg_details[3].value="";
    sch_reg_details[4].value="";
    sch_reg_details[5].value="";
    sch_reg_details[6].value="";
    sch_reg_details[7].value="";
    location.href="student_register.html";
}

// eventListeners & onloads
sch_submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    validateSchoolInput();
})
