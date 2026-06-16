const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];

const eliteStudents = students.filter(student => student.passed && student.marks >= 70);


const totalMarks = eliteStudents.reduce((sum, student) => sum + student.marks, 0);


const toppersMap = eliteStudents.reduce((acc, student) => {
  const { subject, marks } = student;
  
  if (!acc[subject] || marks > acc[subject].marks) {
    acc[subject] = student;
  }
  return acc;
}, {});

const topStudents = Object.values(toppersMap);

console.log("Filtered & Grouped Toppers:", topStudents);
console.log("Total Marks:", totalMarks);
