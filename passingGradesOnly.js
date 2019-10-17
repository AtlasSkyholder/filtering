const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const pass = grades.filter(num => (num >= 70));
console.log("These are the passing grades:", pass);