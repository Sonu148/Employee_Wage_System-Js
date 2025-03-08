const WAGE_PER_HOUR = 20;
const MAX_HOURS_IN_A_MONTH =160;
const NUM_OF_WORKING_DAYS = 20;

//variables
let totalEmpHours =0;
let totalWorkingDays =0;
let employeeDailyWageArray = new Array();
let employeeDailyWageMap = new Map();
let employeDailyHoursMap = new Map();

//function to calculate working hours

function getWorkingHours(empCheck){
    //input
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

let empHours = 0;
    switch(empCheck){
        case 1 : empHours = PART_TIME_HOURS;
        break;
        
        case 2 :empHours= FULL_TIME_HOURS;
        break;
        
        default : empHours =0;
        break;
        }
        
        return empHours;
}

//function to calculate daily wage

function calculateDailyWage(empHours){
    return empHours *WAGE_PER_HOUR;
}

while(totalEmpHours<MAX_HOURS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) % 3; 
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    employeeDailyWageArray.push(calculateDailyWage(empHours));
    employeeDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHours));
    employeDailyHoursMap.set(totalWorkingDays,empHours);

    if(!employeDailyHoursMap.has(totalWorkingDays)){
        employeDailyHoursMap.set(totalWorkingDays,empHours);
    }
}


const findTotal = (totalVal,dailyVal) => {return totalVal+dailyVal;}
let count =0;
let totalHours = Array.from(employeDailyHoursMap.values()).reduce(findTotal,0);
let totalSalary = employeeDailyWageArray.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("UC 9 - Employee Wage with arrow : " + "Total Hours : " + totalHours + "Total Wages" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

employeDailyHoursMap.forEach((value,key,map) => {
    if(value ==8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working days  : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

//UC 7A - Calculating total wage using array for each traversal

let totalEmpWage =0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}

employeeDailyWageArray.forEach(sum);

console.log("UC 7A - Employee wage with reduce : " + employeeDailyWageArray.reduce(totalWages,0));

console.log(employeeDailyWageMap);
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC 7A - Total wage computed using Map : " , Array.from(employeeDailyWageMap.values()).reduce(totalWages,0));

//UC 7B - Show the day along with Daily Wage using Array map helper function 

let dailyCntr =0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C - Show Days when Full time wage of 160 were earned 
function fullTimeWage(dailyWage){
    return dailyWage === 160;
}

let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC 7C - Daily Wage Filter when FullTime Wage Earned");
console.log(fullDayWageArray);

//UC 7D - Find the first occurrence when Full Time Wage  was earned using find function 
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time FullTime wage was earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC 7E - Check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all element have full time wage : " + fullDayWageArray.every(isAllFullTimeWage));


//UC 7F - Find the number of days the Employee Worked
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part Time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC 7G - Find the number of days employee worked 
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays +1;
    return numOfDays;
}

console.log("UC 7G - Number of Days Employee Worked : " + employeeDailyWageArray.reduce(totalDaysWorked,0));

