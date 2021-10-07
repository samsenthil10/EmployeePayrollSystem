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

{

    let totalEmployeeWage = 0;

    function totalWagesUsingForEach(dailyWage) {
        totalEmployeeWage += dailyWage
    }
    employeeWageArray.forEach(totalWagesUsingForEach);
    console.log("total days: " + totalWorkingDays + " Employee hours: " + totalEmployeeHours + " Employee wage: " + totalEmployeeWage);

    function totalWagesUsingReduce(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("Employee wage with reduce:" + employeeWageArray.reduce(totalWagesUsingReduce, 0));

    let dailyCounter = 0;

    function mapDayWithWage(dailyWage) {
        dailyCounter++;
        return dailyCounter + " = " + dailyWage;
    }

    let mapDayWithWageArray = employeeWageArray.map(mapDayWithWage);
    console.log("Mapping day with Wage earned on that day");
    console.log(mapDayWithWageArray)

    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
    console.log("Daily wage filter when full time wage earned ")
    console.log(fullDayWageArray)

    function findFulltimeWage(dailyWage) {
        return dailyWage.includes("160")
    }
    console.log("First full time wage was earned on Day: " + mapDayWithWageArray.find(findFulltimeWage))

    function isAllFullTimeWage(dailyWage) {
        return dailyWage.includes("160")
    }
    console.log("Check if all element have Full time Wage: " + fullDayWageArray.every(isAllFullTimeWage))

    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80")
    }
    console.log("Check if any part time Wage :" + mapDayWithWageArray.some(isAnyPartTimeWage))

    function totalDaysWorked(numberOfDays, dailyWage) {
        if (dailyWage > 0) {
            return numberOfDays + 1;
        }

        return numberOfDays;
    }
    console.log("Number of days employee worked: " + employeeWageArray.reduce(totalDaysWorked, 0));
    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage
    }

    console.log("Employee wage map totalHours: " + Array.from(employeeDailyWageMap.values()).reduce(totalWages, 0))

    let employeeWage = calculateDailyWages(totalEmployeeHours)
    console.log("total days: " + totalWorkingDays + " Employee hours: " + totalEmployeeHours + " Employee wage: " + employeeWage);

    const findTotal = (totalValue, dailyValue) => { return totalValue + dailyValue };

    let count = 0;
    let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0)
    let totalSalary = employeeWageArray.filter(dailyWage => dailyWage > 0)
        .reduce(findTotal, 0);
    console.log("Employee wage with Arrow: " + "Total hours: " + totalHours + " Total wages: " + totalSalary)

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    employeeDailyHoursMap.forEach((value, key, map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key)
    });

    console.log("Full working days: " + fullWorkingDays);
    console.log("Part working days: " + partWorkingDays);
    console.log("Non working days: " + nonWorkingDays)
}