const grades = {
    Math: 85,
    English: 90,
    Science: 78
};

// Print each subject and its marks
for (const subject in grades) {
    console.log(`${subject}: ${grades[subject]}`);
}

// Add a new subject
grades.History = 88;
grades.Geography = 92;

// Print again
console.log("After adding History:");
for (const subject in grades) {
    console.log(`${subject}: ${grades[subject]}`);
}