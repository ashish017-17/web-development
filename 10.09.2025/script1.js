const student = {
    name: "Ashish",
    age: 21,
    grade: "B.tech"
};

console.log("Initial student:", student);

// Add a new property school
student.school = "Central High";
console.log("After adding school:", student);

// Update the student's grade
student.grade = "11th";
console.log("After updating grade:", student);

// Delete the age property
delete student.age;
console.log("After deleting age:", student);