/* 
Program will take 2 inputs. One is element, other is index. Insert that element at that index of list.
*/

let nums = [2, 4, 6, 8, 10];
function insertElement(ele, ind){
    let i;
    i = nums.slice(0, ind);
    i.push(ele);
    for (let j=ind; j<nums.length; j++){
        i.push(nums[j]);
    }

console.log(i);

}
insertElement(5, nums.length);