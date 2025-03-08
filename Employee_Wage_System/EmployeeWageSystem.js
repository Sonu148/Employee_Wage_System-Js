// UC 5
const MAX_HOURS = 160;
const MAX_DAYS = 20;
let totalEmpHours = 0;
let totalDays = 0;

while (totalEmpHours < MAX_HOURS && totalDays < MAX_DAYS) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkHours(empCheck);
    totalDays++;
}

let totalWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Employee Wage: $" + totalWage);


