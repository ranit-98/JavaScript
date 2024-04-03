function filterStringsByLength(minLength, ...strings) {

    let filteredStrings = strings.filter(str => str.length > minLength);
  
    return filteredStrings;
  }
  
 
  let resultArray = filterStringsByLength(5, "apple", "banana", "orange", "kiwi", "grape");
  
  console.log(resultArray);
 
  