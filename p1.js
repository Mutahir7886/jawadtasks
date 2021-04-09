/*
Crete a function in which I will pass a list of integers and it should return the smallest integer.
*/

let temp =0;
function smallestInt(arr){
    for (let i=0; i<=arr.length; i++){
        for (let j=i; j<=arr.length; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
            
        }
        
    }
    console.log('Smallest integer is:', arr);      
    
}
smallestInt([1, 5, 9, 7, -6, -9]);



