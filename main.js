
function convertFahrToCelsius (fahrenheit) {
  
  /* from the instructions of 1F = 1.8C + 32
  C = (1F-32)/1.8 */
var TemperatureInCelsius = (fahrenheit - 32) / 1.8;

{
  if (Array.isArray(fahrenheit)){
    
      return `[${fahrenheit}] is not a valid number but a/an Array`;

} 
else if (typeof fahrenheit === "object"){
const myJson = JSON.stringify( fahrenheit);
return `${ myJson} is not a valid number but a/an object`;
}


else {
return TemperatureInCelsius;
}
}
}
convertFahrToCelsius()




/*number two*/

var arr = [];

function checkYuGiOh(n) {  

  for(var  i = 1; i<= n; i++) { 
                               
if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
arr.push('yu-gi-oh');
}
   else if(i % 3 === 0 && i % 5 === 0) {
arr.push('gi-oh');
} 
 else if(i % 2 === 0 && i % 5 === 0) {
arr.push('yu-oh');
}
 else if(i % 2 === 0 && i % 3 === 0) {
arr.push('yu-gi');
 }
  else if (i % 5 === 0) {
 arr.push('oh');
}
 else if (i % 3 === 0) {
 arr.push('gi');
}
else if (i % 2 === 0) {
 arr.push('yu');
}  
  else{arr.push(i) ;
    }
    

  } 
       
  
     { if (Array.isArray(n)) {
      return `invalid parameter:"${n}"`;}
      
        else if (typeof n === "string" ) {
           return `invalid parameter:"${n}"`;}
      
     else if(typeof n === "object"){
          const myObj = JSON.stringify(n);
          return`invalid parameter:"${myObj}"`; }
    
       else { return arr;}}
        
   return arr;
}
checkYuGiOh();
