
function getWorkHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

const WAGE_PER_HOUR = 20;
let empCheck = Math.floor(Math.random() * 3); 
let empHours = getWorkHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage: $" + empWage);
