//5)Write a JavaScript program to find the leap years in a given range of years.
function findLeapYears(startYear, endYear) {
    const leapYears = [];
  
    for (let year = startYear; year <= endYear; year++) {
    
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  const startYear = 2010;
  const endYear = 2030;
  
  const leapYearsInRange = findLeapYears(startYear, endYear);
  
  console.log(`Leap years between ${startYear} and ${endYear}:`, leapYearsInRange);
  