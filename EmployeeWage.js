const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_A_MONTH = 160;


function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWages(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let employeeDailyHoursAndWageArray = new Array();

while (totalEmployeeHours <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyHoursAndWageArray.push(
        {
            dayNumber: totalWorkingDays,
            dailyHours: employeeHours,
            dailyWage: calculateDailyWages(employeeHours),
            toString() {
                return '\nDay' + this.dayNumber + '=>working hours is ' + this.dailyHours +
                    ' Wage earned = ' + this.dailyWage
            }
        });
}

console.log("Showing daily hours worked and wages earned :" + employeeDailyHoursAndWageArray)

let totalWages = employeeDailyHoursAndWageArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHoursAndWage) => totalWage += dailyHoursAndWage.dailyWage, 0);

let totalHours = employeeDailyHoursAndWageArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHoursAndWage) => totalHours += dailyHoursAndWage.dailyHours, 0);

console.log("total hours:" + totalHours + " total wages: " + totalWages);

process.stdout.write("Logging full work days")

employeeDailyHoursAndWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 8)
    .forEach(dailyHoursAndWage => process.stdout.write(dailyHoursAndWage.toString()))

let partWorkingDayString = employeeDailyHoursAndWageArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 4)
    .map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log("\nPartWorkingDay Strings: " + partWorkingDayString)

let nonWorkingDaysNumbers = employeeDailyHoursAndWageArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 0)
    .map(dailyHoursAndWage => dailyHoursAndWage.dayNumber)

console.log("NonWorkingDayNums : " + nonWorkingDaysNumbers)

let totalEmployeeWage = 0;

function totalWagesUsingForEach(employee) {
    totalEmployeeWage += employee.dailyWage
}
employeeDailyHoursAndWageArray.forEach(totalWagesUsingForEach);
console.log("\ntotal days: " + totalWorkingDays + " Employee hours: " + totalEmployeeHours + " Employee wage: " + totalEmployeeWage);



function totalWagesUsingReduce(totalWage, employee) {
    return totalWage + employee.dailyWage;
}
console.log("\nEmployee wage with reduce:" + employeeDailyHoursAndWageArray.reduce(totalWagesUsingReduce, 0));



let firstFullTimeWage = employeeDailyHoursAndWageArray
    .find(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160)
    .dayNumber;
console.log("\nFirst full time wage was earned on Day: " + firstFullTimeWage)


let isFullWageEveryDay = employeeDailyHoursAndWageArray
    .every(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160)
console.log("Check if all element have Full time Wage: " + isFullWageEveryDay)


let isAnyPartTimeWage = employeeDailyHoursAndWageArray
    .some(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 80)
console.log("Check if any part time Wage :" + isAnyPartTimeWage)



let workDays = employeeDailyHoursAndWageArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
    .length;
console.log("Number of days employee worked: " + workDays);


let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
employeeDailyHoursAndWageArray.forEach(employee => {
    if (employee.dailyHours == 8) fullWorkingDays.push(employee.dayNumber);
    else if (employee.dailyHours == 4) partWorkingDays.push(employee.dayNumber);
    else nonWorkingDays.push(employee.dayNumber)
});

console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays)