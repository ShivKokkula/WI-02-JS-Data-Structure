console.log("Welcome to Employ Wage Program");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HOURS_IN_MONTH = 100;

let totalEmpHrs = 0;
let empHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

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
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let totEmpWage =0;
let empWage = calcDailyWage(empHrs);

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

//UC-7- Calc total Wage using Array forEach traversal or reduce mthod

console.log("UC7A - Total Days: " + (--totalWorkingDays) + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage,dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages,0));

//UC 7B - Show day along with the Daily Wage using Array map helper function

let dailycntr = 0;
function mapDayWithWage(dailywage) {
    dailycntr++;
    return dailycntr + " = " + dailywage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);