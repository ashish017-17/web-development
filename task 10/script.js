function runTasks() {
  let output = document.getElementById("output");
  output.innerHTML = ""; // clear old results

  // 1) Create an object student with properties: name, age, and grade
  let student = {
    name: "Ashish",
    age: 20,
    grade: "A"
  };
  output.innerHTML += "<strong>Step 1:</strong> " + JSON.stringify(student) + "<br><br>";

  // 2) Add a new property school
  student.school = "ABC College";
  output.innerHTML += "<strong>Step 2:</strong> " + JSON.stringify(student) + "<br><br>";

  // 3) Update the student’s grade
  student.grade = "A+";
  output.innerHTML += "<strong>Step 3:</strong> " + JSON.stringify(student) + "<br><br>";

  // 4) Delete the age property
  delete student.age;
  output.innerHTML += "<strong>Step 4:</strong> " + JSON.stringify(student) + "<br><br>";
}
