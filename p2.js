/*
Create a function that returns a list of first 50 prime numbers
*/
let num = [2 ,3, 5, 7];
function firstFiftyPrimeNumbers(){
    
    for (let i=11; i<=500; i++){
        
        if (i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0){
            num.push(i);
        }
      
    }
    num.length = 50;
    console.log('First 50 prime numbers are: \n', num);
}
firstFiftyPrimeNumbers();