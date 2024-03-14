// Function to get value of the parameters
function getUrlParameterValue(url, parameter) {
  let query = url.split("?")[1]; // extracting all query
  let queryArray = query.split("&"); //Spliting on the basis of &
  let Obj = {};
  queryArray.forEach((ele) => {    
    keyValueArray = ele.split("=");
    Obj[keyValueArray[0]] = keyValueArray[1]; // Storing as key avlue pairs
  });
  return Obj[parameter];
}
const url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

 
console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));
console.log(getUrlParameterValue(url, "utm_source"));




// Function to reverse the given number
function reverseTheNumber(num) {
    let numStr = num.toString();
     return parseInt(numStr.split("").reverse().join(""));
    
}
console.log(reverseTheNumber(149));

  
