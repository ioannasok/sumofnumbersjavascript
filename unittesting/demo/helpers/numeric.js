
 function sum(arr) {

    let sum = 0;
    
    for (let num of arr){
    
    sum += Number(num);
    
    }
    
    return sum;
    
    }
const theNumberPI = Math.PI 

module.exports = { 
    theNumberPI: theNumberPI,
    sum: sum
}