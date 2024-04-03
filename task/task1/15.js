function cleanArray(array) {
    return array.filter(function (element) {
      return element !== null &&
             element !== 0 &&
             element !== '' &&
             element !== false &&
             element !== undefined &&
             !Number.isNaN(element);
    });
  }
  
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

  const resultArray = cleanArray(sampleArray);
  
  console.log(resultArray);
  