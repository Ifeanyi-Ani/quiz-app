let stu_list=[];

function displayStudent(){
    let stu_storage=localStorage.getItem("students");
    if(stu_storage !=null){
        stu_list=JSON.parse(stu_storage);
    }
    let output="";
   stu_list.forEach((item, i)=>{
    console.log(item);
    output +=`
    <tr>
    <td>${i+1}</td>
    <td>${item.name.firstname} ${item.name.lastname}</td>
    <td>${item.reg_no}</td>
    <td>${item.school}</td>
    <td>${item.gender}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
    <td>${item.age}</td>
   </tr>
    `
   })
    document.getElementById("stu_dis").innerHTML=output;
}

window.onload=function(){
    displayStudent();
}