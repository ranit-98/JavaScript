function l(s) {
    let start = 0;
    let maxLength = 0;
    let c = {};
  
    for (let end = 0; end < s.length; end++) {
      let currentChar = s[end];
  
      if (c[currentChar] !== undefined && c[currentChar] >= start) {
        start = c[currentChar] + 1;
      }
  
      c[currentChar] = end;
  
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
      }
    }
  
    return s.substring(start, start + maxLength);
  }
  
  let inputString = "GooGle.com";
  let result = l(inputString);
  console.log(result);