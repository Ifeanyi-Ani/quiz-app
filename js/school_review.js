let sch_list=[];

function displaySchool(){
    let sch_storage=localStorage.getItem("schools");
    if(sch_storage !=null){
        sch_list=JSON.parse(sch_storage);
    }
    let output="";
    for (let item of sch_list){
        output +=`
        <div class="school-card">
        <div class="details">
        <div class="name"><span>${item.schoolname}</span></div>
        <div class="email">${item.email}</div>
        <div class="phone">${item.phone}</div>
        <div class="address">${item.address.street} ${item.address.state} ${item.nationality}</div>
        </div>
        </div>
        `
    }
    document.getElementById("sch_dis").innerHTML=output;
}

window.onload=function(){
    displaySchool();
}