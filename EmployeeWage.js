const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORK_DAYS = 20;
const MAX_WORK_HRS = 160;


function getWorkHRs(employeeCheck) {
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;

        case IS_FULL_TIME:
            return FULL_TIME_HRS;

        default:
            return 0;
    }
}

function calculateWage(employeeHours) {
    return employeeHours * WAGE_PER_HR;
}

let totalWorkHours = 0, totalWage = 0, employeeCheck = 0, totalWorkingDays = 0;
let employeeDailyWageArray = new Array();

while (totalWorkingDays < NO_OF_WORK_DAYS && totalWorkHours <= MAX_WORK_HRS) {
    totalWorkingDays++;
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours = getWorkHRs(employeeCheck);
    totalWorkHours += employeeHours;
    employeeDailyWageArray.push(calculateWage(employeeHours))
}

function sum(dailyWage){
    totalWage += dailyWage;
}

employeeDailyWageArray.forEach(sum);
console.log("Total Days = " + totalWorkingDays + ", Work Hours = "
 + totalWorkHours + ", Wage = " + totalWage); 