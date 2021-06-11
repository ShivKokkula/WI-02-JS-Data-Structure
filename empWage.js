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
}
let totEmpWage =0;
let empWage = calcDailyWage(totalEmpHrs);

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

//UC-7C - Show days when fulltime wage of 160 were earned

function fulltimeWage(dailywage) {
    return dailywage.includes("160");
}

let fulldayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C - Daily Wage filter when fill time earned");
console.log(fulldayWageArr);

//UC -7D - Find the first occurance when fulltime wage was earned using find function
function findFulltimeWage(dailywage) {
    return dailywage.includes("160");
}
console.log("UC-7D- First time fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

//UC-7F- Check if there is any part time wage
function isAnyPartTimeWage(dailywage) {
    return dailywage.includes("80");
}
console.log("UC 7F - Check if any part time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays,dailywage) {
    if (dailywage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}

console.log("UC 7G - Number of days emp worked : " +empDailyWageArr.reduce(totalDaysWorked,0));