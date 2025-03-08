const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
let dailyWages = [];

// Function to get work hours
function getWorkHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

// Generating Daily Wages Array
for (let day = 1; day <= WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    let dailyHours = getWorkHours(empCheck);
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
}

// UC 7A: Calculate Total Wage Using reduce
let totalWage = dailyWages.reduce((sum, wage) => sum + wage, 0);
console.log("Total Wage:", totalWage);

// UC 7B: Show Day Along with Daily Wage Using map
let dailyWageWithDay = dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day-wise Wages:", dailyWageWithDay);

// UC 7C: Show Days When Full-Time Wage (160) Was Earned Using filter
let fullTimeDays = dailyWages
    .map((wage, index) => (wage === 160 ? `Day ${index + 1}` : null))
    .filter(day => day !== null);
console.log("Days with Full-Time Wage:", fullTimeDays);

// UC 7D: Find First Occurrence of Full-Time Wage Using find
let firstFullTimeDay = dailyWages.find(wage => wage === 160);
console.log("First Full-Time Wage Day:", firstFullTimeDay);

// UC 7E: Check If Every Element Is Full-Time Wage Using every
let allFullTime = dailyWages.every(wage => wage === 160);
console.log("Is Every Element a Full-Time Wage?", allFullTime);

// UC 7F: Check If There Is Any Part-Time Wage Using some
let hasPartTime = dailyWages.some(wage => wage === 80);
console.log("Is There Any Part-Time Wage?", hasPartTime);

// UC 7G: Count Number of Days Worked
let daysWorked = dailyWages.filter(wage => wage > 0).length;
console.log("Number of Days Worked:", daysWorked);




