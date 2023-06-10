let sch_list=[];
let stu_list=[];
let ques_list=[];

function displaySchool(){
    let sch_storage=localStorage.getItem("schools");
    if(sch_storage !=null){
        sch_list=JSON.parse(sch_storage);
    }
    document.getElementById("sch_count").textContent=sch_list.length;
    let output="";
    for (let item of sch_list){
        output +=`<tr>
                        <td>
                                <h4>${item.schoolname}<br> <span>${item.address.street} ${item.address.state} ${item.nationality}</span></h4>
                            </td>
                    </tr>
        `
    }
    document.getElementById("sch_pre").innerHTML=output;
}


function displayStudent(){
    let stu_storage=localStorage.getItem("students");
    if(stu_storage !=null){
        stu_list=JSON.parse(stu_storage);
    }
    document.getElementById("stu_count").textContent=stu_list.length;
    let output="";
   stu_list.forEach((item)=>{
    output +=`
    <tr>
    <td>${item.name.firstname} ${item.name.lastname}</td>
    <td>${item.reg_no}</td>
    <td>${item.school}</td>
    <td>${item.age}</td>
   </tr>
    `
   })
    document.getElementById("stu_pre").innerHTML=output;
}
function quesLen(){
    let ques_store=localStorage.getItem("questions");
    if(ques_store !=null){
        ques_list=JSON.parse(ques_store);
    }
    document.getElementById("ques_count").textContent=ques_list.length;

}

window.onload=function(){
    displaySchool();
    displayStudent();
    quesLen();
}