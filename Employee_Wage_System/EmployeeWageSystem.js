
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;

let totalEmpHours = 0;

for (let day = 0; day < WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkHours(empCheck);
}

let monthlyWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Employee Wage for the Month: $" + monthlyWage);

