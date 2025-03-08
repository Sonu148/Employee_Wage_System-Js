const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
let dailyWages = [];

function getWorkHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

for (let day = 1; day <= WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    let dailyHours = getWorkHours(empCheck);
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
}

console.log("Daily Wages Array:", dailyWages);