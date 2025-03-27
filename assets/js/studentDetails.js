document.addEventListener("DOMContentLoaded", ()=>{
    localStorage.removeItem("editIdx");
    localStorage.removeItem("editStudent");
})

let heading = document.getElementById("heading");
let stuArray = JSON.parse(localStorage.getItem("students")) || [];

function display(){
    document.getElementById("studentData").innerHTML = "";
    stuArray.forEach((studentInfo , idx)=> {
        document.getElementById("studentData").innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td>${studentInfo.name}</td>
            <td>${studentInfo.mail}</td>
            <td>${studentInfo.course == 1 ? `Full Stack Develpoment` : studentInfo.course == 2 ? `UI/UX Design` : `AI/ML and Data Science`}</td>
            <td>${studentInfo.gender}</td>
            <td>
                <button class="btn btn-warning" onclick="editStudentdata(${idx})">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deletedata(${idx})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>`
    });
}
if(stuArray.length === 0){
    heading.innerHTML = "No Student Record ";
    document.getElementById("studentData").innerHTML = "";
    document.querySelector("table").innerHTML = "";
}else{
    heading.innerHTML = "Student Details ";
    display();
}


function editStudentdata(idx){
    let student = stuArray[idx];
    localStorage.setItem("editIdx" , idx);
    localStorage.setItem("editStudent" , JSON.stringify(student));

    window.location = "./index.html"
}

function deletedata(idx){
    stuArray.splice(idx , 1);
    localStorage.setItem("students", JSON.stringify(stuArray));
    display();
}

