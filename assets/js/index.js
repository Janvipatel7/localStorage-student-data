document.addEventListener("DOMContentLoaded" , () => {
    let editIdx = JSON.parse(localStorage.getItem("editIdx"));
    let editStudent = JSON.parse(localStorage.getItem("editStudent"));

    document.getElementById("name").value = editStudent.name;
    document.getElementById("mail").value = editStudent.mail;
    document.getElementById("course").value = editStudent.course;
    document.querySelector(`input[value = "${editStudent.gender}"]`).checked = true;
    document.getElementById("submit").innerHTML = "Update";
})

document.getElementById("submit").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector(`input[type="radio"]:checked`).value;


    let studentObj = { name, mail, course, gender };

    let stuArray = JSON.parse(localStorage.getItem("students")) || [];

    stuArray.push(studentObj);

    localStorage.setItem("students", JSON.stringify(stuArray));

    window.location = "./student-data.html"
})