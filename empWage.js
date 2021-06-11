console.log("Welcome to Employ Wage Program");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HOURS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }  
}

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-8 - Emp wage map total hrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));