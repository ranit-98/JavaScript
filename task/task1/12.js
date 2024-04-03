//[{name:”Nill”,address:”malda”},{name:”Rupam”,address:”Kolkata”},{name:”raju”,address:”Jalpaiguri}remove   2nd object

const arrayExample = [
    { name: "Nill", address: "malda" },
    { name: "Rupam", address: "Kolkata" },
    { name: "Raju", address: "Jalpaiguri" }
  ];
  
  
  function removeSecondObject(arr) {
  
    arr.splice(1, 1); 
  
    return arr;
  }

  const newArray = removeSecondObject(arrayExample);
  
  console.log(newArray);
  