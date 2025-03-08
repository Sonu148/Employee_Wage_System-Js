const WAGE_PER_HOUR = 20;
const MAX_HOURS_IN_A_MONTH =160;
const NUM_OF_WORKING_DAYS = 20;

//variables
let totalEmpHours =0;
let totalWorkingDays =0;
let employeeDailyWageArray = new Array();
let employeeDailyWageMap = new Map();

let employeeDailyHoursAndWageArray = new Array();

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
    
    let dailyWage = calculateDailyWage(empHours);

    employeeDailyWageArray.push(dailyWage);
    employeeDailyHoursAndWageArray.push({
        dayNum : totalWorkingDays,
        dailyHours:empHours,
        dailyWage:dailyWage,
        toString(){
            return  '\nDay' + this.dayNum + '=> Working hours is ' + this.dailyHours + 
            'And Wage Earned = ' + this.dailyWage
        },
    });
    employeeDailyWageMap.set(totalWorkingDays,dailyWage);
}

//UC 10 show daily hours and wage earned 
console.log("UC 10 Showing Daily Hours Worked and Wage Earned : " + employeeDailyHoursAndWageArray);

//UC9 - Total hours and wages using arrow functions

const findTotal = (total,value) => total + value;

let totalHours = employeeDailyHoursAndWageArray.map(day => day.dailyHours).reduce(findTotal,0);
let totalSalary = employeeDailyWageArray.reduce(findTotal,0);
console.log("UC 9 - Employee Wage with arrow : " + "Total Hours : " + totalHours + "Total Wages" + totalSalary);


//UC8 - WORKDAYS segregation
let fullWorkingDays = employeeDailyHoursAndWageArray.filter(day => day.dailyHours === 8).map(day =>day.dayNum);
let partWorkingDays = employeeDailyHoursAndWageArray.filter(day => day.dailyHours === 4).map(day =>day.dayNum);
let nonWorkingDays = employeeDailyHoursAndWageArray.filter(day => day.dailyHours === 0).map(day =>day.dayNum);


console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working days  : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

//UC 7A - Calculating total wage using array for each traversal
console.log("UC 7A - Total wage calculated using map :" , Array.from(employeeDailyWageMap.values()).reduce(findTotal,0));

//UC 7B - Show the day along with Daily Wage using Array map Arrow Function
let mapDayWithWageArray = employeeDailyWageArray.map((dailyWage,index)=> `${index +1} = ${dailyWage}`);
console.log("UC 7B - Daily Wage Map :", mapDayWithWageArray);

//UC 7C - Show Days when Full time wage of 160 were earned 
fullDayWageArray = mapDayWithWageArray.filter(wage =>wage.includes("160"));
console.log("UC 7C - ull time wage earned on days : " + fullDayWageArray);

//UC 7D - Find the first occurrence when Full Time Wage  was earned using Arrow Function
console.log("UC 7D - First time FullTime wage was earned on Day : " + mapDayWithWageArray.find(wage => wage.includes("160")));

//UC 7E - Check if every element of full time wage is truly holding full time wage
console.log("UC 7E - Check all element have full time wage : " + fullDayWageArray.every(wage => wage.includes("160")));


//UC 7F - Find the number of days the Employee Worked
console.log("UC 7F - Check if any part Time wage : " + mapDayWithWageArray.some(wage => wage.includes("80")));

//UC 7G - Find the number of days employee worked 
console.log("UC 7G - Number of Days Employee Worked : " + employeeDailyWageArray.filter(wage => wage>0).length);